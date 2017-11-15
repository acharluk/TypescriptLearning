const socket = io();

socket.on('connected', () => console.log("Connected to server!"));

socket.on('give_random', data => console.log(data));

function requestRandom() {
    socket.emit('get_random');
}