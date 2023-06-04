const stockroutes = require('./routes/stockroutes');
const userroutes = require('./routes/userroutes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
let cors = require('cors');

if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: './config/config.env' });
}

mongoose.connect(process.env.url).then(() => {
    console.log('Connected with MongooseDB successfully')
}).catch((err) => {
    console.log(err)
})

const express = require('express');
const app = express()
const port = 3001;

//app.use(cors())
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.set("trust proxy",1)
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your client's domain
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });

app.use('/api/v1/', stockroutes);
app.use('/api/v1/', userroutes);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})