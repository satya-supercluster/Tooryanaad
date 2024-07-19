"use strict";

var express = require('express');

var Guests = require('../model/guests');

var router = new express.Router();
router.get('/guests', function _callee(req, res) {
  var guestData;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Guests.find());

        case 3:
          guestData = _context.sent;
          res.send(guestData);
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
}); // router.post('/guests',async(req,res) => {
//     try{
//         req.body.forEach(async element=>{
//             {
//                 const guest_Data = await Guests(element);
//                 await guest_Data.save();
//             }
//     })
//     }
//     catch (e) {
//         res.status(400).send(e);
//     }
// });
// router.get('/guests',async(req,res) => {
//     try{
//         const getData = await guestData.find({}).sort({"YEAR":1});
//         res.status(201).send(getData);
//     }
//     catch (e) {
//         res.status(400).send(e);
//     }
// });
// //handling get request for individual
// router.get('/guests/:id',async(req,res) => {
//     try{
//         const _id = req.params.id;
//         const getData1 = await guestData.findById({_id});
//         res.status(201).send(getData1);
//     }
//     catch (e) {
//         res.status(400).send(e);
//     }
// });

module.exports = router;