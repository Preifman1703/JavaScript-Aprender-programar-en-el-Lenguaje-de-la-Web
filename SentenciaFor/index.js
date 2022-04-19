var cui = ["China", "Indu", "Italiana", "CentroAmericana", "Mexicana", "Mediterranea"];
var seleccion = document.getElementById('tipo-de-cocina');

for(var i = 0; i < cui.length; i++) {

    var opt = document.createElement('option');
        opt.innerHTML = cui[i];
        opt.value = cui[i];
        seleccion.appendChild(opt);
}
