const express = require("express");
const router = express.Router();
const Lot = require("../model/lot.model");


router.get("", async(req,res) =>{
    try {
        const users = await Lot.find().lean().exec();
        return res.status(200).send({lot:lot});
    } catch (error) {
        console.log(error);
        return res.status(500).send("Please Try After Some Time");
    }
});


router.post("", async(req,res)=>{
    try {
        const lot = await Lot.create(req.body);
        return res.status(201).send(lot);
    } catch (error) {
        console.log(error);
        return res.status(500).send({error: error});
    }
});

router.patch("/:id", async(req,res)=>{
    try {
        const lot = await Lot.findByIdAndUpdate(req.params.id, req.body).lean().exec();
        return res.status(201).send({"lot": lot});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
})

router.delete("/:id", async(req,res)=>{
    try {
        const lot = await Lot.findByIdAndDelete(req.params.id, req.body).lean().exec();
        return res.status(201).send({"lot":lot});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
})

module.exports = router;