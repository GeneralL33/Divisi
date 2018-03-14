var emittedValue = 0;

document.addEventListener("DOMContentLoaded", function (event) {
    var socket = io(document.location.href);

    socket.on('connect', function () {
        console.log('Connected!');
        document.getElementById('status-value').innerHTML = "Connected!";
    });

    socket.on('data', function (data) {
        emittedValue = data;

        // // logging
        // console.log(data);
        // document.getElementById('emit-value').innerHTML += data;
    });

    socket.on('disconnect', function () {
        console.log('Disconnected!');
        document.getElementById('status-value').innerHTML = "Disconnected!";
    });
});