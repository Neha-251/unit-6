const express = require("express");
const router = express.Router();
const Floor = require("../model/floor.model");


router.get("", async(req,res) =>{
    try {
        const floor = await Floor.find().lean().exec();
        return res.status(200).send({floor:floor});
    } catch (error) {
        console.log(error);
        return res.status(500).send("Please Try After Some Time");
    }
});


router.post("", async(req,res)=>{
    try {
        const floor = await Floor.create(req.body);
        return res.status(201).send(floor);
    } catch (error) {
        console.log(error);
        return res.status(500).send({error: error});
    }
});

router.patch("/:id", async(req,res)=>{
    try {
        const floor = await Floor.findByIdAndUpdate(req.params.id, req.body).lean().exec();
        return res.status(201).send({"floor": floor});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
})

router.delete("/:id", async(req,res)=>{
    try {
        const floor = await Floor.findByIdAndDelete(req.params.id, req.body).lean().exec();
        return res.status(201).send({"floor":floor});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
})

module.exports = router;