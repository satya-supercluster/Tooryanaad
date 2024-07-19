const express = require('express');
const Guests =require('../model/guests');
const router = new express.Router();

router.get('/guests', async (req, res) => { 
    try {
        const guestData = await Guests.find();
        res.send(guestData);
    } 
    catch (e) {
        res.send(e);
    }
});

// router.post('/guests',async(req,res) => {
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

