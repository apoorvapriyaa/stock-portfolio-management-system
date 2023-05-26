const routes = require('./routes/stockroutes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: './config/config.env' });
}

mongoose.connect(process.env.url).then(()=>{
    console.log('Connected with MongooseDB successfully')
}).catch((err)=>{
    console.log(err)
})

const express = require('express');
const app = express()
const port = 3001; 

app.use('/api/v1/', routes);
app.use(bodyParser.urlencoded({extended:true}))

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})