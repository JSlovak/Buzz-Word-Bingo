/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
require('../server.js');

const buzzWords = [];


// Using ':' will denote that the uri is dynamic and then can be used within each handler method
router.route('/')
  .post(function(req, res) {
    const body = req.body;
    const word = req.body.buzzWord;

    // Check to see if that word already exists in memory
      // If already exists return
      // res.json({ "success": false});

    // Initiates an instance and count for that
      buzzWords.push({word: 1});
      res.json({ "success": true});
  })

  .put(function(req, res) {
    // Check to see if that word already exists in memory
      // if true
      // res.json({ "success": false});

      // if false
      // add 1 to newScore
      // save score and put value into returning json newScore
    res.json({ "success": true, newScore: null});
  })

  .delete(function(req, res) {
    console.log(buzzWords);
    // use array method to splice the value...
    console.log(buzzWords);
    // res.send(`You've deleted buzzword`);
    res.json({ "success": true});
  });

module.exports = router;

// Helper functions
function doesExist(word){
  for(let i = 0; i < buzzWords.length; i++){
    const isThere = buzzWords[i].hasOwnProperty(word);
    console.log(isThere);
  }

};