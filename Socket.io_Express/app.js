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
        history.forEach((v) => socket.emit('message', v));
        sendMessage(socket, "New user connected: " + data.nick, true);
    })

    socket.on('disconnect', () => {
        sendMessage(socket, "User disconnected: " + users[socket.client.id], true);
    });

    socket.on('send_message', data => {
        if (!sendMessage(socket, data)) {
            socket.emit('message', { nick: "Server", msg:"Error: user is undefined. Please reload the page." });
        }
    })
})

function sendMessage(socket, message, isServer) {
    let nick = isServer ? "Server" : users[socket.client.id];
    let msg = { nick: nick, msg: message };

    if (nick) {
        io.emit('message', msg);
        history.push(msg);

        return true;
    }

    return false;
}

/*
function getRandomNumber(min, max) {
    console.log("Calculating random number between: " + min + " and " + max);
    let result = Math.floor(Math.random() * (max - min)) + min;
    console.log("Result is: " + result);

    return result;
}
*/

http.listen(port, () => console.log("Server started on port: " + port));