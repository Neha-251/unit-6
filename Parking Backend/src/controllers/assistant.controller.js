const express = require("express");
const router = express.Router();
const Assistant = require("../model/assistant.model");


router.get("", async(req,res) =>{
    try {
        const users = await Assistant.find().lean().exec();
        return res.status(200).send({users:users});
    } catch (error) {
        console.log(error);
        return res.status(500).send("Please Try After Some Time");
    }
});


router.post("", async(req,res)=>{
    try {
        const users = await Assistant.create(req.body);
        return res.status(201).send(users);
    } catch (error) {
        console.log(error);
        return res.status(500).send({error: error});
    }
});

router.patch("/:id", async(req,res)=>{
    try {
        const assistant = await Assistant.findByIdAndUpdate(req.params.id, req.body).lean().exec();
        return res.status(201).send({"assistant": assistant});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
})

router.delete("/:id", async(req,res)=>{
    try {
        const lot = await Assistant.findByIdAndDelete(req.params.id, req.body).lean().exec();
        return res.status(201).send({"assistant":assistant});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
})

module.exports = router;