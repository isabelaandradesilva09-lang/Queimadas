function mostrarMensagem(){

alert("As queimadas causam enormes danos ao meio ambiente. Faça sua parte!");

}

let numero = document.getElementById("numero");

let contador = 0;

setInterval(function(){

contador++;

numero.innerHTML = contador;

},100);
