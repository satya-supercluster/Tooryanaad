const express = require('express');
const Team = require('../model/team');
const router = new express.Router();

router.get('/teams', async (req, res) => { 
    try {
        const teamData = await Team.find();
        // console.log(teamData);
        res.send(teamData);
    } 
    catch (e) {
        res.send(e);
    }
});

// router.post('/teams',async(req,res)=>{
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
module.exports= router;
