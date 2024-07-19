"use strict";

var express = require('express');

var Team = require('../model/team');

var router = new express.Router();
router.get('/teams', function _callee(req, res) {
  var teamData;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Team.find());

        case 3:
          teamData = _context.sent;
          // console.log(teamData);
          res.send(teamData);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.send(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // router.post('/teams',async(req,res)=>{
//     try{
//         const teamData = await Team(req.body);
//         await teamData.save();
//         console.log(teamData);
//         res.status(200).send(teamData);
//     }
//     catch (err) {
//         res.status(400).send(err);
//     }
// });

module.exports = router;