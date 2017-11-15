const socket = io();

let random_list = document.getElementById("random_list")

socket.on('connected', () => console.log("Connected to server!"));

socket.on('give_random', data => {
    let li = document.createElement('li');
    li.textContent = data;
    random_list.appendChild(li);
});

function requestRandom() {
    socket.emit('get_random');
}