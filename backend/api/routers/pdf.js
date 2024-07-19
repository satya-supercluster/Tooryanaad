const express = require('express');
// const PDF = require('../model/t_registration');
const T_Registration = require('../model/t_registration');
const router = new express.Router();


router.get('/Pdffile', async (req, res, next) => {
  const { token } = req.query;
  try {
    let pdfData;
    if (token) {
      pdfData = await T_Registration.find({ token: token });
    } else {
      pdfData = await T_Registration.find();
    }
    // console.log(pdfData);
    res.send(pdfData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
  

// router.post('/events', async (req,res ,next)=>{
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

module.exports= router;