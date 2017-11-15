const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io').listen(http);
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

io.on('connection', socket => {
    socket.on('disconnect', () => console.log("User disconnected"));

    socket.emit('connected');
    socket.on('get_random', data => {
        socket.emit('give_random', getRandomNumber(data.min, data.max));
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