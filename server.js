/*jshint esversion: 6 */

const express = require('express');
const buzzword = require('./routes/buzzword.js');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;
const buzzWords = [];

// respond with contact form on the contact page
app.use(express.static('public'));

// You must parse your application before linking in your routers
app.use(bodyParser.urlencoded({extended: false}));

// Attach buzzword router
app.use('/buzzword', buzzword);

// Returns all the added buzzwords
app.get('/buzzwords', (req, res)=>{
  res.json({'buzzWords': buzzWords});
});

// Resets the server
app.post('/reset', (req, res) => {
  res.send('All the buzzwords have been cleared. Start adding new buzzwords');
});

// Wildcard regex expression to handle 404 pages
app.get(`*`, (req,res)=>{
  res.send('404');
});

const server = app.listen(port, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Server listening on ${port}`);
});