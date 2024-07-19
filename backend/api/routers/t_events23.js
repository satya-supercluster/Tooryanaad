const express = require('express');
const T_Event23 = require('../model/t_events23');
const router = new express.Router();

router.get('/t_events', async (req, res, next) => {
  const { alias } = req.query;
  try {
    let eventData;
    if (alias) {
      eventData = await T_Event23.find({ alias: alias });
    } else {
      eventData = await T_Event23.find();
    }
    res.send(eventData);
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