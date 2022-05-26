const express = require("express");
const router = express.Router();
const Parking = require("../model/parking.model");


router.get("", async(req,res) =>{
    try {
        const parking = await Parking.find().lean().exec();
        return res.status(200).send({users:parking});
    } catch (error) {
        console.log(error);
        return res.status(500).send("Please Try After Some Time");
    }
});


router.post("", async(req,res)=>{
    try {
        const parking = await Parking.create(req.body);
        return res.status(201).send(parking);
    } catch (error) {
        console.log(error);
        return res.status(500).send({error: error});
    }
});

router.patch("/:id", async(req,res)=>{
    try {
        const lot = await Parking.findByIdAndUpdate(req.params.id, req.body).lean().exec();
        return res.status(201).send({"parkingr": parking});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
})

router.delete("/:id", async(req,res)=>{
    try {
        const parking = await Parking.findByIdAndDelete(req.params.id, req.body).lean().exec();
        return res.status(201).send({"parking":parking});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
})



module.exports = router;