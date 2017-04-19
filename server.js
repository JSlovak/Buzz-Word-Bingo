/*jshint esversion: 6 */

const express = require('express');
const buzzwords = require('./routes/buzzwords.js');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// respond with contact form on the contact page
app.use(express.static('public'));

// You must parse your application before linking in your routers
app.use(bodyParser.urlencoded({extended: false}));

// Attach movie router to express
app.use('/buzzwords', buzzwords);

// Wildcard regex expression to handle 404 pages
app.get(`*`, (req,res)=>{
  res.send('404');
});

const server = app.listen(port, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Server listening on ${port}`);
});