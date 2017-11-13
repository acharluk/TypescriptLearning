let list = document.getElementById('pressed_list');

function press() {
    console.log("Pressed!");

    let li = document.createElement('li');
    li.textContent = "Pressed! Here's a random number: " + Math.random();

    list.appendChild(li);
}