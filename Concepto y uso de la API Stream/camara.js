document.addEventListener("DOMContentLoaded", function() {
    navigator.mediaDevices.getUserMedia( {
        video: true,
        audio: false
})
    .then(stream => video.srcObject = stream)
    .catch(console.error);
    document.getElementById("capturar").addEventListener("click", function () {
            Canvas.getContext("2d").drawImage(video, 0, 0, 500, 377);
            Canvas.setAttribute("src", Canvas.toDataURL('image/png'));
            guardarFoto();
    })
  
    function obtenerFecha() {
        d = new Date();
        fh = d.getFullYear() + '' + (d.getMonth() + 1) + '' + d.getUTCDate() + '' +
                d.getHours() + '' + d.getMinutes() + '' + d.getSeconds();
                return fh;
    
    }
    
    function guardarFoto() {
        var link = document.createElement("a");
        link.download = "imagen_" + obtenerFecha() + ".png";
        link.href = document.getElementById("canvas").toDataURL()
        link.click();
    }
});
