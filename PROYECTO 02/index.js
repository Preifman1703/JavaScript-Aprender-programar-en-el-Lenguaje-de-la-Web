function Saludo() {
    var resultado = prompt('Ingrese su nombre: ', '');
    if (resultado != '') {
        document.getElementById('TextoSaludo').innerHTML = 'Bienvenido ' + resultado;
    } else {
        document.getElementById('TextoSaludo').innerHTML = '';
        alert('Por favor, Ingrese su nombre: ');
    }
}