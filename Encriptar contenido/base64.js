document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("boton-encriptar").addEventListener("click", function() {

        var palabra = document.getElementById("texto").value;
        if (palabra == "") {
            alert("Debe ingresar un texto valido.");
            palabra.focus;
        } else {
            encripto(palabra);
        }
       
    });
    document.getElementById("boton-desencriptar").addEventListener("click", function() {
        var texto_encriptado = document.getElementById("texto-resultado").innerText;
        if (texto_encriptado == "") {
            //nada para desencriptar
        } else {
            desencripto(texto_encriptado);
        }
       
    });
    function encripto(texto) {
        var texto_codificado = btoa(texto);
        document.getElementById("texto-resultado").innerText = texto_codificado;
    }
    function desencripto(base) {
        var texto = atob(base);
        document.getElementById("texto-desencriptado").innerText = texto;
    }
    
});


