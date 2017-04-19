/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

// Using ':' will denote that the uri is dynamic and then can be used within each handler method
router.route('/:id/:rating')
  .get(function(req, res) {
    res.send(`Got Movie by ID ${req.params.id}, it has a rating of ${req.params.rating}`);
  })
  .post(function(req, res) {
    console.log(req.body);
    res.send('Add a Cool Movie');
  })
  .put(function(req, res) {
    res.send('Update the Cool Movie');
  })
  .delete(function(req, res) {
    res.send('Delete the Cool Movie');
  });

module.exports = router;