document.addEventListener("DomContentLoaded", function(){

});

var valores = document.querySelectorAll("#txtnombre, #txtapellido, #txtemail, #txturl, #txttelefono");

for (var valor of valores) {
     //guardamos el valor en cada campo
     valor.addEventListener("change", function() {
        localStorage.setItem(this.id, this.value);
    });
}
   
    //Recuperamos el valor de cada campo guardado
        var campoGuardado = localStorage.getItem(valor.id);
        if (campoGuardado != null) {
            valor.value = campoGuardado.trim();
        }

