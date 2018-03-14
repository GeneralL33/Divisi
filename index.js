var nconf = require('nconf'),
    app = require('express')(),
    http = require('http').Server(app),
    SerialPort = require('serialport'),
    io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

/********* Environment configuration concerns *********/
// First consider commandline arguments and environment variables, respectively.
nconf.argv().env();

// Then load configuration from a designated file.
nconf.file({
    file: 'config.json'
});

// Provide default values for settings not provided above.
nconf.defaults({
    'http': {
        'port': 3005
    },
    'serialPort': {
        'port': 'COM4',
        'baudRate': 9600
    }
});

/********* SerialPort concerns *********/
const Readline = SerialPort.parsers.Readline;

// port subject to change!
var port = new SerialPort(nconf.get('serialPort:port'), {
    baudRate: nconf.get('serialPort:baudRate')
}, (err) => {
    if (err) {
        return console.log('Error: ', err.message);
    }
});

const parser = port.pipe(new Readline({
    delimiter: '\r\n'
}));

port.on('open', () => {
    // Server is connected to Arduino
    console.log('Serial Port opened');

    io.sockets.on('connection', (socket) => {
        // Connecting to client 
        console.log('Socket connected');
        socket.emit('connected');

        parser.on('data', (data) => {
            console.log('Data: ', data);
            socket.emit('data', data);
        });
    });
});

/********* Socket.IO concerns *********/

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

/***************************************/

// Listen on port
app.set('port', (process.env.PORT || nconf.get('http:port') || 3005));

// Notfy port
http.listen(app.get('port'), () => {
    console.log('Running on port', app.get('port'));
});