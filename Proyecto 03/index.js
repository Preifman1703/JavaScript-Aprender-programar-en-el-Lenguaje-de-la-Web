function fechaActual() {
    var d = new Date();
    document.getElementById("fecha").innerHTML = d.toLocaleDateString();
}