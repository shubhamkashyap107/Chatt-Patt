const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app); // request listener
const path = require('path'); 
const socketio = require('socket.io');
const io = socketio(server);



 const users = {}


app.use('/', express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    console.log(`Connection Established at ${socket.id}`)
    // socket.on('send-msg', (data) => {
        
    socket.on('send-msg', (data) => {
        // console.log(data.msg);
        io.emit('received-msg', {
            msg : data.msg,
            id : socket.id,
            username: users[socket.id]
        })
    })

    socket.on('login', (data) => {
        // console.log(data)
        users[socket.id] = data.username;
    })
})




server.listen(3000, () => {
    console.log("Server connected")
})














