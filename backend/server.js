const routes = require('./routes/stockroutes');
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

app.use(cors())
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cookieParser())

app.use('/api/v1/', routes);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})