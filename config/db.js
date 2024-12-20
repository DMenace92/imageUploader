const mongoose = require('mongoose')
const config = require('../config/config')


let newConfig = config;

mongoose.connect(newConfig, {

})
mongoose.connection.on('connected', ()=>{
    console.log('connected to mongodb')
})
mongoose.connection.on('error',(err)=>{
    console.log(err);
})


module.exports = newConfig;