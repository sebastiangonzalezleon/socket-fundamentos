const { io } = require('../server');

// client tiene toda la informacion de la persona que se conecto al servicio
// desde ip, socket, navegador, etc
io.on('connection', (client) => {

    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a estas aplicacion'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.emit('enviarMensaje', {
            usuario: data.usuario,
            mensaje: data.mensaje
        });
    });
    // client.on('enviarMensaje', (mensaje, callback) => {
    //     //console.log(mensaje);
    //     if (mensaje.usuario) {
    //         callback({
    //             respuesta: 'Todo salio OK'
    //         });
    //     } else {
    //         callback({
    //             respuesta: 'Todo salio MAL!!!!!!'
    //         });
    //     }

    // });
})