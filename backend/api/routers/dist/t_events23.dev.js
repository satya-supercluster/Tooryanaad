"use strict";

var express = require('express');

var T_Event23 = require('../model/t_events23');

var router = new express.Router();
router.get('/t_events', function _callee(req, res, next) {
  var alias, eventData;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          alias = req.query.alias;
          _context.prev = 1;

          if (!alias) {
            _context.next = 8;
            break;
          }

          _context.next = 5;
          return regeneratorRuntime.awrap(T_Event23.find({
            alias: alias
          }));

        case 5:
          eventData = _context.sent;
          _context.next = 11;
          break;

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(T_Event23.find());

        case 10:
          eventData = _context.sent;

        case 11:
          res.send(eventData);
          _context.next = 18;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
          res.status(500).json({
            error: 'Internal server error'
          });

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 14]]);
}); // router.post('/events', async (req,res ,next)=>{
//     try {
//         const eventData = await Event.find();
//         console.log(eventData);
//         await eventData.save();
//         res.send(eventData);
//     } 
//     catch (e) {
//         res.send(e);
//     }
// });

module.exports = router;