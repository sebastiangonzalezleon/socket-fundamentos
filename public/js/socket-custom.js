var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
//escuchar informacion
socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});
//envia informacion
socket.emit('enviarMensaje', {
    usuario: 'Sebastian',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta Servidor:', resp)
});
// escucha informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});