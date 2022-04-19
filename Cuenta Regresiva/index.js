var countDownDate = new Date("december 1, 2022 00:00:00").getTime();

// Creamos una funcion integrada en la variable 'tiempo'.
var tiempo = setInterval(function() {

//obtenemos el dia ACTUAL.
var now = new Date().getTime();

//identificamos la diferencia de TIEMPO (en milisegundos) entre el dia de hoy y nuestro dia futuro.
var diferencia = countDownDate - now;

/*utilizamos math.floor(), para convertir los milisegundos obtenidos en la variable 
'diferencia'; dias, horas, minutos, segundos*/
var dias = math.floor(diferencia / (1000 * 60 * 60 * 24));
var horas = math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutos = math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
var segundos = math.floor((diferencia % (1000 * 60)) / 1000);

//mostramos el calculo realizado en el id="cuentaregresiva"
document.getElementById("cuentaregresiva").innerHTML = "<h3>" + dias + " D " + horas + " H " + minutos + " M " + segundos + " S " + "</h3>";

// Si sobrepasó la fecha en cuestión, visualizamos otro tipo de leyenda 
if (distancia < 0) {
    clearInterval(tiempo);
    document.getElementById("cuentaregresiva").innerHTML = "<h3>¡Feliz 2022 para Todos!</h3>";
    }

}, 1000);