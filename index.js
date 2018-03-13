var app = require('express')(),
    http = require('http').Server(app),
    io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

/********* Socket.IO concerns *********/

io.on('connection', function (socket) {
    console.log('a user connected');

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});

/***************************************/

// Listen on port
app.set('port', (process.env.PORT || 3005));

// Notfy port
http.listen(app.get('port'), () => {
    console.log('Running on port', app.get('port'));
});