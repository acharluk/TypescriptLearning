const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io').listen(http);
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

http.listen(port, () => console.log('Server started on port: ' + port));