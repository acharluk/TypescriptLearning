const socket = io();

let messages = document.getElementById("random_list")

socket.on('connected', () => console.log("Connected to server!"));

socket.on('message', data => {
    let li = document.createElement('li');
    li.textContent = data;
    messages.appendChild(li);
});

socket.emit('login', { nick: prompt("Enter your nick:") });

function requestRandom() {
    let min = parseInt(prompt("Enter minimum number"));
    let max = parseInt(prompt("Enter maximum number"));
    
    socket.emit('get_random', { min: min, max: max });
}