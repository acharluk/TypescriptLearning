const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io').listen(http);
const port = process.env.PORT || 3000;

let users = [];
let history = [];

app.use(express.static(__dirname + '/public'));

io.on('connection', socket => {
    socket.on('login', data => {
        users[socket.client.id] = data.nick;
        console.log("New user connected: " + data.nick);
        history.forEach((v) => socket.emit('message', v));
        io.emit('message', { nick: "Server", msg: "New user connected: " + data.nick });
    })

    socket.on('disconnect', () => {
        console.log("User disconnected: " + users[socket.client.id]);
        if (users[socket.client.id])
            io.emit('message', { nick: "Server",  msg:"User disconnected: " + users[socket.client.id] });
    });

    socket.emit('connected');
    socket.on('send_message', data => {
        console.log("Message from id=" + socket.client.id + ", user=" + users[socket.client.id] + ": " + data);
        if (users[socket.client.id]) {
            io.emit('message', { nick: users[socket.client.id], msg: data });
            history.push({ nick: users[socket.client.id], msg: data });
        } else {
            socket.emit('message', { nick: "Server", msg:"Error: user is undefined. Please reload the page." });
        }
    })

    console.log("New connection!");
})

function getRandomNumber(min, max) {
    console.log("Calculating random number between: " + min + " and " + max);
    let result = Math.floor(Math.random() * (max - min)) + min;
    console.log("Result is: " + result);

    return result;
}

http.listen(port, () => console.log("Server started on port: " + port));