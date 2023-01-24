window.onload = function () {
    document.getElementById("textarea-izq").value = "";
    document.getElementById("textarea-derecho").value = "";
};

var btnEncriptar = document.querySelector("#btn-encriptar");
var btnDesencriptar = document.querySelector("#btn-desencriptar");
var btnCopiar = document.querySelector("#btn-copiar");

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiando; 

function encriptar(){
    var texto = document.getElementById("textarea-izq").value.toLowerCase();

    if (texto == "") {
        alert("Por favor introduzca un texto valido en el area del input")
    } else {
        // i --> Para letras mayusculas y minusculas
        // g --> Para que tome en cuenta toda la linea de la oracion
        // m --> Para que tome en cuenta si hay multilineas
        var textocifrado = texto.replace(/e/img,"enter");
        textocifrado = textocifrado.replace(/i/img,"imes");
        textocifrado = textocifrado.replace(/a/img,"ai");
        textocifrado = textocifrado.replace(/o/img,"ober");
        textocifrado = textocifrado.replace(/u/img,"ufat");

    document.getElementById("textarea-derecho").value = textocifrado;

    document.getElementById("muneco").style.display = "none";
    document.getElementById("titulo-derecho").style.display = "none";
    document.getElementById("parrafo-derecho").style.display = "none";
    document.getElementById("btn-copiar").style.display = "block";
    }
}

function desencriptar(){
    var texto = document.getElementById("textarea-izq").value.toLowerCase();

    if (texto == "") {
        alert("Por favor introduzca un texto valido en el area del input");
    }
    else {
        // i --> Para letras mayusculas y minusculas
        // g --> Para que tome en cuenta toda la linea de la oracion
        // m --> Para que tome en cuenta si hay multilineas
        var textocifrado = texto.replace(/enter/img,"e");
        textocifrado = textocifrado.replace(/imes/img,"i");
        textocifrado = textocifrado.replace(/ai/img,"a");
        textocifrado = textocifrado.replace(/ober/img,"o");
        textocifrado = textocifrado.replace(/ufat/img,"u");

    document.getElementById("textarea-derecho").value = textocifrado;
    console.log(textocifrado);

    document.getElementById("muneco").style.display = "none";
    document.getElementById("titulo-derecho").style.display = "none";
    document.getElementById("parrafo-derecho").style.display = "none";
    }    
}

function copiando(){

    let copiar_texto = document.getElementById("textarea-derecho").value;

    navigator.clipboard.writeText(copiar_texto).
    then(() => {
        alert("Se ha copiado el texto!!!!!");
    })
    .catch(() => {
        alert("No se copió el texto");
    });

    document.getElementById("textarea-derecho").value = "";
}