function saludo(){
    var resultado = prompt('ingrese su nombre ', '');
    if(resultado != ''){
        document.getElementById('textoSaludo').innerHTML = 'Bienvenido ' + resultado;
    } else {
        document.getElementById('textoSaludo').innerHTML = '';
        alert('Por favor, ingrese su nombre.');
    }
}