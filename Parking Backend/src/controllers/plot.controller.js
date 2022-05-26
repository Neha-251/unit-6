const express = require("express");
const router = express.Router();
const Plot = require("../model/plot.model");


router.get("", async(req,res) =>{
    try {
        const plot = await Plot.find().lean().exec();
        return res.status(200).send(plot);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Please Try After Some Time");
    }
});


router.post("", async(req,res)=>{
    try {
        const plot = await Plot.create(req.body);
        return res.status(201).send(plot);
    } catch (error) {
        console.log(error);
        return res.status(500).send({error: error});
    }
});

router.patch("/:id", async(req,res)=>{
    try {
        const plot = await Plot.findByIdAndUpdate(req.params.id, req.body).lean().exec();
        return res.status(201).send(plot);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
})

router.delete("/:id", async(req,res)=>{
    try {
        const plot = await Plot.findByIdAndDelete(req.params.id, req.body).lean().exec();
        return res.status(201).send(lot);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
})

module.exports = router;