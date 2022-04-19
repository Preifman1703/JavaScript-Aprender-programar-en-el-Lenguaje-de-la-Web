Notification.requestPermission().then(function(result){
    console.log(result);

});

var notificacion = new Notification(titulo, opciones);

function notificame() {
    
    if(!("Notification" in window)) {
        alert("La version de su navegador web no soporta notificaciones web. ");
        console.log("El navegador web no acepta notificaciones.");
    }
    else if (Notification.permission === "granted")
    var imagen = '/images/logo-footer-transparente-128x128.png';
    var texto = 'Has creado exitosamente tu primera notificacion web.';
    var titulo = 'Notificaciones web';
    var notificacion = new Notification(titulo, {
        body: texto,
        icon: imagen});

        console.log('Notificacion emitida.');

        setTimeout(notificacion.close.bind(notificacion),1000);

}

