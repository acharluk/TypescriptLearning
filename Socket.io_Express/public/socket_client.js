const socket = io();

socket.on('connected', () => console.log("Connected to server!"));