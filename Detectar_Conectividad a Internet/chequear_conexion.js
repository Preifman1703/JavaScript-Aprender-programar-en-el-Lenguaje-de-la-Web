document.addEventListener("DOMContentLoaded", function() {
    validarConectividad();
})
document.getElementById("boton-agregar").addEventListener("click", function() {
    alert("Hola mundo!");
})
function validarConectividad() {
    setInterval(function() {
        var conectado = navigator.onLine;
        if (conectado) {
            habilitoComponentes();
        } else {
            deshabilitoComponentes();
        }
    }
    ,4000
    );
}
function habilitoComponentes() {
    document.getElementById("senial").setAttribute("class","material-icons visible");
    document.getElementById("no-senial").setAttribute("class","material-icons hide");
    document.getElementById("barra").setAttribute("class","progress hide");
    document.getElementById("boton-agregar").setAttribute("class", "btn-floating btn-large waves-effect waves-light red right shadow");
    console.info("Houston, nos hemos conectado con exito!");
}
function deshabilitoComponentes() {
    document.getElementById("senial").setAttribute("class","material-icons hide");
        document.getElementById("no-senial").setAttribute("class", "material-icons visible");

        document.getElementById("barra").setAttribute("class", "progress visible");
            document.getElementById("boton-agregar").setAttribute("class", "btn-floating btn-large waves-effect waves-light grey disabled right shadow");
            console.error("Houston, tenemos un problema....de conectividad!");
}