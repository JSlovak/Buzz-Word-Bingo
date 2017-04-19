/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

// Using ':' will denote that the uri is dynamic and then can be used within each handler method
router.route('/buzzword')
  .post(function(req, res) {
    console.log(req.body);
    res.send(`You've added a new buzzword`);
    res.json({ "success": true});
  });
  // .put(function(req, res) {
  //   res.send(`You've added a count to your buzzword`);
  //   res.json({ "success": true, newScore: Number});
  // })
  // .delete(function(req, res) {
  //   res.send(`You've deleted buzzword ${req.body}`);
  //   res.json({ "success": true});
  // });

module.exports = router;