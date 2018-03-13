var app = require('express')(),
    http = require('http').Server(app),
    SerialPort = require('serialport'),
    io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

/********* SerialPort concerns *********/
const Readline = SerialPort.parsers.Readline;

// port subject to change!
var port = new SerialPort('COM3', {
    baudRate: 9600
}, function (err) {
    if (err) {
        return console.log('Error: ', err.message);
    }
});

const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

port.on('open', function () {
    // Server is connected to Arduino
    console.log('Serial Port opened');

    io.sockets.on('connection', function (socket) {
        // Connecting to client 
        console.log('Socket connected');
        socket.emit('connected');

        parser.on('data', function (data) {
            console.log('Data: ', data);
            socket.emit('data', data);
        });
    });
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