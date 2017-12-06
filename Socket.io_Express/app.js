const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io').listen(http)
const port = process.env.PORT || 3000

const MongoClient = require('mongodb').MongoClient
const url = "mongodb://localhost:27017/messages"

const commands = require('./commands')

let users = {}
let history = []

app.use(express.static(__dirname + '/public'))

MongoClient.connect(url, (err, db) => {
    if (err) throw err
    console.log("Database created!")

    db.createCollection("message_list", (err, res) => {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
      });
})

io.on('connection', socket => {
    socket.on('login', data => {
        users[socket.client.id] = data.nick
        history.forEach((v) => socket.emit('message', v))
        // sendMessage(socket, "New user connected: " + data.nick, true)
        io.emit('update_users', users)
    })

    socket.on('disconnect', () => {
        // sendMessage(socket, "User disconnected: " + users[socket.client.id], true)
        users[socket.client.id] = undefined
        io.emit('update_users', users)
    })

    socket.on('send_message', data => {
        if (!sendMessage(socket, data)) {
            socket.emit('message', { nick: "Server", msg:"Error: user is undefined. Please reload the page." })
        }
    })
})

function sendMessage(socket, message, isServer) {
    let nick = isServer ? "Server" : users[socket.client.id]
    let msg = { nick: nick, msg: message, enableHTML: isServer }

    if (nick) {
        io.emit('message', msg)
        history.push(msg)

        // Command
        if (message[0] == '!')
            sendMessage(socket, processCommand(message.substr(1)), true)

        return true
    }

    return false
}

function processCommand(command) {
    let response = "That command doesn't exist"
    let args = command.split(" ")

    if (commands[args[0]])
        response = commands[args[0]].run(args)

    return response
}

http.listen(port, () => console.log("Server started on port: " + port))