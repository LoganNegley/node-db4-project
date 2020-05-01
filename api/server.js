const express = require('express');//using express 
const RecipesRouter = require('../recipes/recipes-Router');

const server = express();//using express server to run server
server.use(express.json());
server.use('/api/recipes', RecipesRouter);

//api testing if working 
server.get('/', (req,res) =>{
    res.json({
        api: 'running'
    })
})

module.exports = server