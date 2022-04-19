var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function(event) {

    event.preventDefault();

	var form = document.querySelector("#form-adicionar");
    
    var paciente = capturarDatosPaciente(form);
  
    
    
    var errores = validarPaciente(paciente);
    
    if(errores.length > 0) {
        exibirMensajesErrores(errores);
        return;
    }
   
    
    adicionarPacienteEnLaTabla(paciente);
    form.reset();

    var mensajeErrores = document.querySelector("#mensajes-errores");
    mensajeErrores.innerHTML = "";


});

function adicionarPacienteEnLaTabla(paciente) {
    var pacienteTr = construirTr(paciente);  
    
    var tabla = document.querySelector("#tabla-pacientes");

    tabla.appendChild(pacienteTr);

}

function capturarDatosPaciente(form) {
    
    //capturando los bloques del formulario.

    var paciente = {
        
        nombre: form.nombre.value,

        peso: form.peso.value,

        altura: form.altura.value,

        gordura: form.gordura.value,

        imc: calcularIMC(form.peso.value,form.altura.value),

    }

    return paciente;

}

function construirTr(paciente) {

var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(construirTd(paciente.nombre,"info-paciente"));
      
    pacienteTr.appendChild(construirTd(paciente.peso,"info-peso"));
  
    pacienteTr.appendChild(construirTd(paciente.altura,"info-altura"));
  
    pacienteTr.appendChild(construirTd(paciente.gordura,"info-gordura"));
  
    pacienteTr.appendChild(construirTd(paciente.imc,"info-imc"));

    return pacienteTr;
}


function construirTd (dato,clase) {

    var td = document.createElement("td");
    
    td.classList.add(clase);
    
    td.textContent = dato;
    
    return td;
}

function validarPaciente(paciente){
    var errores = []

    if(paciente.nombre.length == 0) {
        errores.push("La casilla NOMBRE no puede estar Vacio");
    }

    if(paciente.peso.length == 0) {
        errores.push("La casilla PESO no puede estar Vacio");
    }
    
    if(paciente.altura.length == 0) {
        errores.push("La casilla ALTURA no puede estar Vacia");
    }
    
    if(paciente.gordura.length == 0) {
        errores.push("La casilla %GORDURA no puede estar Vacia");
    }

    if(!validarPeso(paciente.peso)) {
        errores.push("El peso es Incorrecto");
    }

    if(!validarAltura(paciente.altura)) {
        errores.push("La altura es Incorrecta");
    }
    return errores;

}


function exibirMensajesErrores(errores) {

    var ul = document.querySelector("#mensajes-errores");
    ul.innerHTML = ""
    errores.forEach( function(error) {
       var li = document.createElement("li");
       li.textContent = error;
       ul.appendChild(li);

    });

}