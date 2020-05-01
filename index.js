const server = require('./api/server'); //pulling server file to run server


//server running an listening on port
server.listen(4000, () =>{
    console.log('Listening on port 4000')
});