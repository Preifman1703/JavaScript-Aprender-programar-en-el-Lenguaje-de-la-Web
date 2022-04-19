document.addEventListener("DOMContentLoaded", function() {
// seleccionamos el DIV cuyo ID es 'campo'
var d = document.getElementById("campo");
// creamos dentro de éste un INPUT TYPE TEXT
var t = document.createElement("INPUT");
    t.setAttribute("type", "text");
    t.setAttribute("value", "");
    t.setAttribute("id", "micampodetexto");
    t.setAttribute("placeholder", "Ingrese un texto");
    d.appendChild(t);

    var d = document.getElementById("boton");
    var b = document.createElement("BUTTON");
    b.setAttribute("id", "btnPresionar");
    b.innerText = "Presioname";
    d.appendChild(b);

    var src = "logo-ru.jpg";
    var i = document.getElementById("imagen");
    i.classList.replace("formato","nuevoformato");
    var g = document.createElement("IMG");
        g.setAttribute("src", src);
        i.appendChild(g);
    
        document.getElementById("btnPresionar").addEventListener("click", function() {
            texto = document.getElementById("micampodetexto").value;
            if(texto.trim() != "") {
                alert(texto);
            }
        });

   
    
    
  

});



