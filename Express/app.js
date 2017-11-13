const express = require('express');
const app = express();
const http = require('http').Server(app);

app.use(express.static(__dirname + '/public'));

http.listen(3000, () => console.log("Server listening on port 3000"));