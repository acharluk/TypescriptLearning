const socket = io();

let messages = document.getElementById("message_list")
let message_box = document.getElementById("message_box");

socket.on('connected', () => console.log("Connected to server!"));

socket.on('message', data => {
    let li = document.createElement('li');
    li.textContent = data;
    messages.appendChild(li);
});

socket.emit('login', { nick: prompt("Enter your nick:") });

function sendMessage() {
    socket.emit('send_message', message_box.value);
    message_box.value = "";
}