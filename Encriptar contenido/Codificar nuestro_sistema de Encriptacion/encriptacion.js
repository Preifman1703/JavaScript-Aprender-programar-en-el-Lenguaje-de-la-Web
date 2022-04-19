document.addEventListener("DOMContentLoaded", function() {
    var be = document.getElementById("boton-encriptar");
    var rs = document.getElementById("label-resultado");
    var l = document.getElementById("txt-codificar");
    console.log("Se cargó el DOM y se declararon todas las variables...");

    be.addEventListener("click", function() {
        var l = document.getElementById("txt-codificar");
        if (l.value.trim() != "") {
            var devolucion = encripto(l);
            rs.innerHTML = "RESULTADO: <strong>" + devolucion + "</strong>";
        }
    });
});

function encripto(aencriptar) {
    var iterar; var c = 0; var pwdEncriptado; var azar;
        pwdEncriptado = "";
        for (c; c < aencriptar.value.length; c++) {
            azar = aencriptar.value.charAt(c).toString();
            switch (aencriptar.value.charAt(c).toString()) {
                case "a": iterar = "Ĳx"; break; //Ĳ 
                case "b": iterar = "Ħg"; break; //Ħ
                case "c": iterar = "bç"; break; //ç
                case "d": iterar = "Ƃt"; break; //Ƃ
                case "e": iterar = "ƏH"; break; //Ə
                case "f": iterar = "Ły"; break; //Ł
                case "g": iterar = "Qƕ"; break; //ƕ
                case "h": iterar = "ħñ"; break; //ħ
                case "i": iterar = "Pï"; break; //ï
                case "j": iterar = "ɻM"; break; //ɻ
                case "k": iterar = "Zɣ"; break; //ɣ
                case "l": iterar = "Lʅ"; break; //ʅ
                case "m": iterar = "ʩ0"; break; //ʩ
                case "n": iterar = "5ʯ"; break; //ʯ
                case "ñ": iterar = "ɰp"; break; //ɰ
                case "o": iterar = "wʘ"; break; //ʘ
                case "p": iterar = "þþ"; break; //þþ
                case "q": iterar = "ǪǪ"; break; //ǪǪ
                case "r": iterar = "ŕŕ"; break; //ŕŕ
                case "s": iterar = "ƻƻ"; break; //ƻƻ
                case "t": iterar = "ǂǂ"; break; //ǂǂ
                case "u": iterar = "ǶǶ"; break; //ǶǶ
                case "v": iterar = "жж"; break; //жж
                case "w": iterar = "ϣϣ"; break; //ϣϣ
                case "x": iterar = "җҖ"; break; //җҖ
                case "y": iterar = "ԣԡ"; break; //ԣԡ
                case "z": iterar = "ʫʫ"; break; //ʫʫ
                case "A": iterar = "ßX"; break; //
                case "B": iterar = "ȶK"; break; //
                case "C": iterar = "ɝʡ"; break; //
                case "D": iterar = "φd"; break; //
                case "E": iterar = "Я#"; break; //
                case "F": iterar = "תu"; break; //
                case "G": iterar = "ᶒv"; break; //
                case "H": iterar = "kỺ"; break; //
                case "I": iterar = "ῠo"; break; //
                case "J": iterar = "ḀJ"; break; //
                case "K": iterar = "@ḉ"; break; //
                case "L": iterar = "ḝI"; break; //
                case "M": iterar = "ὣ∑"; break; //
                case "N": iterar = "ⱬ₤"; break; //
                case "Ñ": iterar = "¬n"; break; //
                case "O": iterar = "ᶿ4"; break; //
                case "P": iterar = "T@"; break; //
                case "Q": iterar = "ĉɥ"; break; //
                case "R": iterar = "1ɷ"; break; //
                case "S": iterar = "0ϧ"; break; //
                case "T": iterar = "Ξ±"; break; //
                case "U": iterar = "ͻC"; break; //
                case "V": iterar = "yЧ"; break; //
                case "W": iterar = "EѤ"; break; //
                case "X": iterar = "ɇk"; break; //
                case "Y": iterar = "|ת"; break; //
                case "Z": iterar = "ḽš"; break; //
                case "1": iterar = "0Ń"; break; //
                case "2": iterar = "Sʥ"; break; //
                case "3": iterar = "ԙӺ"; break; //
                case "4": iterar = "ԠK"; break; //
                case "5": iterar = "%з"; break; //
                case "6": iterar = "#Ѽ"; break; //
                case "7": iterar = "\ʄ"; break; //
                case "8": iterar = "0ʘ"; break; //
                case "9": iterar = "Љ3"; break; //
                case "0": iterar = "Òz"; break; //
                case "+": iterar = "SϷ"; break; //
                case "-": iterar = ";¬"; break; //
                case "*": iterar = "Rԡ"; break; //
                case "/": iterar = "¾b"; break; //
                case "=": iterar = "EΩ"; break; //
                case "_": iterar = "ὃʦ"; break; //
                case "á": iterar = "@ῥ"; break; //
                case "é": iterar = "$ҽ"; break; //
                case "í": iterar = "Ḽ@"; break; //
                case "ó": iterar = "eḁ"; break; //
                case "ú": iterar = "-ԋ"; break; //
                default: 
                    var mascaracteres = " ,;.:-_{[^´¨+~*}]`¿¡?\"=)(/&%$#!°|¬"; var r;
                    var r = Math.random() * (0, mascaracteres.length);
                    iterar = "//" + azar + mascaracteres.charAt(r);
            }
            pwdEncriptado = pwdEncriptado + iterar;
        }
        console.log("La codificación realizada dio como resultado: " + pwdEncriptado);
        return pwdEncriptado;
    }