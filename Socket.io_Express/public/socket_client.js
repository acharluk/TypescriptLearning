const socket = io();

let random_list = document.getElementById("random_list")

socket.on('connected', () => console.log("Connected to server!"));

socket.on('give_random', data => {
    let li = document.createElement('li');
    li.textContent = data;
    random_list.appendChild(li);
});

socket.emit('login', { nick: prompt("Enter your nick:") });

function requestRandom() {
    let min = parseInt(prompt("Enter minimum number"));
    let max = parseInt(prompt("Enter maximum number"));
    
    socket.emit('get_random', { min: min, max: max });
}