const express = require('express');

const app = express()
const imageRouter = require('./route/ImageSotrageRoute')
require('./config/db')
const bodyParser = require('body-parser');
const cors = require('cors')

const PORT = process.env.PORT || 9000;
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(imageRouter)


app.listen(PORT, (err)=>{
    if(err){
        throw err
    }
    console.log(`Server Running on Port: ${PORT}`)
})