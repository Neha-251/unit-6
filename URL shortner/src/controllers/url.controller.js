
const express = require('express');


const router = express.Router();
const Url = require('../models/url.model');

router.get('/', async (req, res) => {
    try{
        const urlshort= await Url.find()
        res.render('index',{urlshort:urlshort});
    }
    catch(err){
        res.status(500).send({ "message": error.message });

    }
});

router.get("/:urlshort",async (req,res)=>{
    try{
        const urlshort=await Url.findOne({short:req.params.urlshort})

        if(urlshort==null) {
            return res.status.send(404)
        }
    
        urlshort.clicks++;
        urlshort.save()
        res.redirect(urlshort.full)
    }
    catch(err){
        res.status(500).send({ "message": error.message });

    }
   
})

router.post('', async (req, res)=>{
	try {
		await Url.create({full:req.body.fullurl});
        res.redirect('/')
	} catch (error) {
		res.status(500).send({ "message": error.message });
	}
});

module.exports=router;