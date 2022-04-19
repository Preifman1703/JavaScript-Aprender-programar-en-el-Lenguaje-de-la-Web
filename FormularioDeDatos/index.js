/*function EsUnaPrueba() {
    if(1 == 1){
        return true;
    } else {
        return false;
    }
}
 if(EsUnaPrueba) {
     // La comparacion devuelve VERDADERO
     // Ejecutar aca el código correspondiente
}*/

function nombre_es_string(){
    var nombrestring = document.getElementById('txtnombre').value; 
    if (isNaN(nombrestring)) {
        return true;
    } else {
        return false;
    }
}

function apellido_es_string() {
    var apellidostring = document.getElementById('txtapellido').value;
    if(isNaN(apellidostring)) {
        return true;
    } else {
        return false;
    }
}

function es_url(){
    var expresion = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    var urlstring = document.getElementById('txturl').value;
    if(expresion.test(urlstring)) {
        return true;
    } else {
        return false;
    }
}

function es_email(){
     var expresion = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
     var emailstring =document.getElementById('txtemail').value;
     if(expresion.test(emailstring)) {
         return true;
     }else {
         return false;
     }
}

function es_telefono(){
    var expresion = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    var nrotelefono = document.getElementById('txttelefono').value;
    if(expresion.test(nrotelefono)) {
        return true;
    } else {
        return false;
    }
}

function validoCampos(){
var esCorrecto = true;
var mErr = "Corrija los siguientes campos: \n";
if(!nombre_es_string()) {
  mErr = mErr + " - nombre \n";
  esCorrecto = false;
}
if(!apellido_es_string()) {
    mErr =mErr + " - apellido \n";
    esCorrecto = false;
}
if(!es_email()) {
    mErr = mErr + " - correo electronico \n";
    esCorrecto = false;
}
if(!es_url()) {
    mErr = mErr + " - direccion web \n";
    esCorrecto = false;
}
if(!es_telefono()) {
    mErr = mErr + " - telefono \n";
    esCorrecto = false;
}
if(esCorrecto == false) {
    alert(mErr);
} else {
    alert('Los datos ingresados en el formulario se han guardado')
    
    }
}