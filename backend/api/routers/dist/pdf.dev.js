"use strict";

var express = require('express'); // const PDF = require('../model/t_registration');


var T_Registration = require('../model/t_registration');

var router = new express.Router();
router.get('/Pdffile', function _callee(req, res, next) {
  var token, pdfData;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          token = req.query.token;
          _context.prev = 1;

          if (!token) {
            _context.next = 8;
            break;
          }

          _context.next = 5;
          return regeneratorRuntime.awrap(T_Registration.find({
            token: token
          }));

        case 5:
          pdfData = _context.sent;
          _context.next = 11;
          break;

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(T_Registration.find());

        case 10:
          pdfData = _context.sent;

        case 11:
          // console.log(pdfData);
          res.send(pdfData);
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