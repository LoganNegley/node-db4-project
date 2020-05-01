const express = require('express');//using express 

const server = express();//using express server to run server
server.use(express.json());

//api testing if working 
server.get('/', (req,res) =>{
    res.json({
        api: 'running'
    })
})

// Routes




module.exports = server