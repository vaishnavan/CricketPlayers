const express = require('express')
const router = express.Router();
const Play = require('../model/player')


router.post('/',async(req,res)=>{
    const play = new Play({
        country:req.body.country,
        playerName:req.body.playerName,
        age:req.body.age,
        url:req.body.url,
        s_rate:req.body.s_rate,
        desc:req.body.desc,
        playAs:req.body.playAs
    })
    await play.save()
    .then(data=>{
        res.json(data)
    })

})


router.get('/allplay',async(req,res)=>{
    await Play.find()
    .then(data=>{
        res.json(data)
    })
})



module.exports = router;