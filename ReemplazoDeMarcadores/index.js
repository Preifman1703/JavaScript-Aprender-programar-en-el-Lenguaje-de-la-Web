var b;
var r;
var t;

function limpiarcampos(){
    document.getElementById("txtbuscar").value = "";
    document.getElementById("txtreemplazar").value = "";
}

function reemplazar(){
    b = document.getElementById("txtbuscar").value;
    r = document.getElementById("txtreemplazar").value;
    t = document.getElementById("texto").value;

    if(b.trim().length > 0 && r.trim().length > 0) {
        if(t.length > 0) {
            var cambio = t.replace(b, r);
            document.getElementById("texto").value = cambio;
        }
    }
}
