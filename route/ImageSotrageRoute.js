const express = require('express');
const Image = require('../module/ImageStorage')
const multer = require('multer')
const fs = require('fs')
const Router = new express.Router();


// Multer setup for file uploads (in memory)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

//create a gridfs to handle the larger image and add it with in the if block



Router.post('/upload', upload.single('image'), async (req, res) => {
    // console.log(req.file)
    if (!req.file) {
        return res.status(400).send({ error: 'No file uploaded' });
    }

    const image = new Image({
        filename: req.file.originalname,
        data: req.file.buffer,
        contentType: req.file.mimetype,
    });

    // console.log(image, "this tells me all"); // Debug: Check image object
    if(req.file.size > 16*1024*1024){
        //grid fs logic goes here
        console.log("its to big")
        res.status(400)
    }else{

    try {
        const savedImage = await image.save();
        res.status(200).send(savedImage);
    } catch (err) {
        console.error(err); // Log detailed error
        res.status(400).send(err);
    }
}
});



Router.get('/fetch_image', async (req,res)=>{

    try{
        const image = await Image.find()
        res.status(200).send(image)
    }catch(err){
        res.status(400).send(err)
    }
})

module.exports = Router;

