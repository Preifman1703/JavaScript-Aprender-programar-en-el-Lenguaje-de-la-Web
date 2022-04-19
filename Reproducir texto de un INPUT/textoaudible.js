var texto = new SpeechSynthesisUtterance();
var voces = speechSynthesis.getVoices();
texto.voice = '2';


function reproducirTexto() {
    var ta = document.getElementById('texto-audible').value;
    if (ta.lenght =! '') {
        texto.text = ta;
        speechSynthesis.speak(texto);

    }
}



texto.onstart = function(e) {
    var t = Event.elapsedTime / 1000;
    console.log('Tiempo de reproduccion: ' + t.toFixed() + ' segundos.');
};

texto.onend = function(e) {
    var t = Event.elapsedTime / 1000;
    console.log('Tiempo de reproduccion: ' + t.toFixed() + ' segundos.');
};