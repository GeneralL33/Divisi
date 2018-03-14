$(function () {
    var socket = io('http://localhost:3005');

    socket.on('connect', function () {
        console.log('Connected!');
        document.getElementById('status-value').innerHTML = "Connected!";
    });

    socket.on('data', function (data) {
        console.log('Data: ', data);
        document.getElementById('emit-value').innerHTML += data;
    });

    socket.on('disconnect', function () {
        console.log('Disconnected!');
        document.getElementById('status-value').innerHTML = "Disconnected!";
    });
});