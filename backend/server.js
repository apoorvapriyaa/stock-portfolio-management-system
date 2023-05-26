const routes = require('./routes/stockroutes');

const express = require('express');
const app = express()
const port = 3001; 

app.use('/api/v1/', routes);

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})