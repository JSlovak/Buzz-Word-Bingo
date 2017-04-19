/*jshint esversion: 6 */

const express = require('express');
const bodyParser = require('body-parser');
const buzzwordRoutes = require('./routes/buzzword');
const app = express();

const port = 3000;

// respond with contact form on the contact page
app.use(express.static('public'));

// You must parse your application before linking in your routers
app.use(bodyParser.urlencoded({extended: false}));

// Attach buzzword router
app.use('/buzzword', buzzwordRoutes);

// Returns all the added buzzwords
app.get('/buzzwords', (req, res)=>{
  res.json({});
});

// Resets the server
app.post('/reset', (req, res) => {
  // need to access buzzWords array, and delete all buzzWords in the array
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

// Helper function

// Need a function that pulls the buzzWord array from /routes/buzzword.js
//