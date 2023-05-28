
const vocales = ["e", "i", "a", "o", "u"];

const claves = ["enter", "imes", "ai", "ober", "ufat"];

var entrada = '';

function encriptar() {

    entrada = document.getElementById("texto-entrada").value;

    if (entrada != '') {

        document.getElementById("imagen").style.display = "none";
        document.getElementById("sin-imagen").style.display = "block";

        for (let vocal = 0; vocal < vocales.length; vocal++) {
            entrada = entrada.replaceAll(vocales[vocal], claves[vocal]);
        }

        document.getElementById("texto-salida").innerHTML = entrada;

    }
    else {
        document.getElementById("imagen").style.display = "block";
        document.getElementById("sin-imagen").style.display = "none";
        alert("Ingrese un mensaje para descifrar");
        
    }


}

function desencriptar() {

    entrada = document.getElementById("texto-entrada").value;

    if (entrada != '') {

        document.getElementById("sin-imagen").style.display = "block";
        document.getElementById("imagen").style.display = "none";

        for (let clave = 0; clave < claves.length; clave++) {

            entrada = entrada.replaceAll(claves[clave], vocales[clave]);
        }

        document.getElementById("texto-salida").innerHTML = entrada;
    }
    else {
        document.getElementById("sin-imagen").style.display = "none";
        document.getElementById("imagen").style.display = "block";
        alert("Ingrese un mensaje para descifrar");
        
    }
}

function copiarMensaje() {
    const copiar = document.getElementById('texto-salida').value;
    navigator.clipboard.writeText(copiar);
}

