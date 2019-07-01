const express = require('express');
//express instantiates app to be a function handler that you can supply to http server
const app = express();
//creating the http server
const server = require('http').Server(app);
//creating the new instance of socket.io by passing the http server object
const io = require('socket.io')(server);
//creating a port
const port = process.env.PORT || 3000;

//Get the html page
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

//listening the incoming sockets
io.on('connection', socket => {
    socket.on('chat message', msg => {
        io.emit('chat message', msg);
    });
});

//listen to the port
server.listen(port, function() {
    console.log('Listening on ' + port);
  });