var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        socket.broadcast.emit('chat message', msg);
    });
});

const server = http.listen(process.env.PORT || 5000, () => {
    console.log('Running on port: '+server.address().port)
})