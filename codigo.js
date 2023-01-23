
var btnEncriptar = document.querySelector("#btn-encriptar");
var btnDesencriptar = document.querySelector("#btn-desencriptar");
var btnCopiar = document.querySelector("#btn-copiar");

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiando; 

function encriptar(){
    var texto = document.getElementById("textarea-izq").value.toLowerCase();

    if (texto != ""){
    // i --> Para letras mayusculas y minusculas
    // g --> Para que tome en cuenta toda la linea de la oracion
    // m --> Para que tome en cuenta si hay multilineas
    var textocifrado = texto.replace(/e/img,"enter");
    var textocifrado = textocifrado.replace(/i/img,"imes");
    var textocifrado = textocifrado.replace(/a/img,"ai");
    var textocifrado = textocifrado.replace(/o/img,"ober");
    var textocifrado = textocifrado.replace(/u/img,"ufat");

    document.getElementById("textarea-derecho").innerHTML = textocifrado;

    document.getElementById("muneco").style.display = "none";
    document.getElementById("titulo-derecho").style.display = "none";
    document.getElementById("parrafo-derecho").style.display = "none";
    document.getElementById("btn-copiar").style.display = "block";

    }
    else (
        alert("Por favor introduzca un texto valido en el area del input")
    )
}



function desencriptar(){
    var textodesenc = document.getElementById("textarea-izq").value.toLowerCase();

    // i --> Para letras mayusculas y minusculas
    // g --> Para que tome en cuenta toda la linea de la oracion
    // m --> Para que tome en cuenta si hay multilineas
    var textocifrado = texto.replace(/enter/img,"e");
    var textocifrado = textocifrado.replace(/imes/img,"i");
    var textocifrado = textocifrado.replace(/ai/img,"a");
    var textocifrado = textocifrado.replace(/ober/img,"o");
    var textocifrado = textocifrado.replace(/ufat/img,"u");

    document.getElementById("textarea-derecho").innerHTML = textocifrado;
    // console.log(textocifrado);

    document.getElementById("muneco").style.display = "none";
    document.getElementById("titulo-derecho").style.display = "none";
    document.getElementById("parrafo-derecho").style.display = "none";

  
}


function copiando(){

    let copiar_texto = document.getElementById("textarea-derecho").value;
    console.log(copiar_texto);

    navigator.clipboard.writeText(copiar_texto);
    alert("Se ha copiado el texto!!!!!");
    document.getElementById("textarea-derecho").value = "";


}