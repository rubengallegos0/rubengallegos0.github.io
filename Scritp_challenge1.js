                                    // Funciones de mi pagina web

//e - enter
//o - ober
//i - imes
//a - ai
//u - ufat
// El .value.toLowerCase() convierte todo a minusculas
// i -> es para que afecte tanto a minusculas como mayusculas - e o E
// g -> es para toda la linea u oración
// m -> es para que afecte a multiples lineas o parrafos

function encriptar() {                                                              // Funcion boton Encriptar 
    var texto = document.getElementById("inputTexto").value.toLowerCase();  
    var txtCifrado = texto.replace(/e/igm,"enter");                                 //Cifamos la primer letra con el texto original
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");                              //despues ciframos con el TxtCifrado y así seguir guardando los cambios
    var txtCifrado = txtCifrado.replace(/i/igm,"imes"); 
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");
    document.getElementById("imagenDer").style.display = "none";                       //Desaparece la imagen al tocar el boton
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar() {                                                              // Funcion boton Desencriptar 
    var texto = document.getElementById("inputTexto").value.toLowerCase();  
    var txtCifrado = texto.replace(/enter/igm,"e");                                 //Cifamos la primer letra con el texto original
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");                              //despues ciframos con el TxtCifrado y así seguir guardando los cambios
    var txtCifrado = txtCifrado.replace(/imes/igm,"i"); 
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");
    document.getElementById("imagenDer").style.display = "none";                       //Desaparece la imagen al tocar el boton
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar () {                                                                //Boton copiar
    var contenido = document.querySelector("#texto2")                               //Boton copiar, copia lo que esta dentro de "texto2"
    contenido.select()
    document.execCommand("copy")
    alert("¡Se copió!")
}