//use this file for api to connect to and pull info out of db
const knex require('knex');//using knex to write squl queries in js

const config = require('../knexfile');// telling us where to get our db from 

const db = knex(config.development)// pulling in whole object to 

module.exports = db;
