const express = require('express');
const Contact = require('../model/contact');
const router = new express.Router();

// router.get('/contact', async (req, res) => { 
//     try {
//         const contactData = await Contact.find();
//         console.log(contactData);
//         res.send(contactData);
//     } 
//     catch (e) {
//         res.send(e);
//     }
// });

router.post('/contact',async(req,res)=>{
    try{
        const contactData = await Contact(req.body);
        await contactData.save();
        res.status(200).send(contactData);
        
    }
    catch (err) {
        res.status(400).send(err);
    }
})
module.exports= router;
