//BOM Browser object model
// Crear un intervalo que se ejecuta cada segundo
// const intervaloId = setInterval(function() {
//     console.log("Intervalo ejecutado");
// }, 500);

// // Después de 5 segundos, detener el intervalo
// setTimeout(function() {
//     clearInterval(intervaloId);
//     console.log("Intervalo detenido");
// },5000);


// function reFresh(){
//     window.open(location.reload(true))
// }
// var repeticion = window.setInterval(reFresh(),1000);


// function mensaje(){
//     document.write('hola mundo');
// }

// window.setTimeout(mensaje,5000)
// window.setTimeout("mensaje()",5000)
// setTimeout(mensaje,5000)
//FIN BOM

// DOM Document object model
// document.body.innerHTML = "hola";

//Funciones para obtener elementos
// document.getElementById('id');
// document.getElementsByClassName('classname');
// document.querySelector('#id o .classname');
// document.getElementsByTagName('nombre de la etiqueta ejemplo: h1,p,etc');
// let main = document.createElement('main');
// main.innerHTML = 'hola mundo';

// main.style.border = '2px dotted blue'
// main.style.margin = '200px'
// main.style.padding = '100px'

// document.body.appendChild(main);//agregar elemento
// //clonar elementos
// let el = document.getElementsByTagName('main')[0];
// document.body.appendChild(el.cloneNode(false))
// document.body.appendChild(el.cloneNode(true))
// // para eliminar se una el removeChild(main)
// let removido = document.body.removeChild(main);
// let pa = document.createElement('main')
// pa.innerHTML = 'chau mundo'
// let replazar = document.replaceChild(removido,pa)

//Eventos
let button = document.getElementById('btn');
button.addEventListener('click',enviarDatos, false);
button.addEventListener('click',calcularDatos, true);
button.addEventListener('click',refrescarDatos, false);

function enviarDatos(e){
    console.log('enviar datos...'+e.target);
}
function calcularDatos(e){
    console.log('calcular datos...'+e.target);
}
function refrescarDatos(e){
    console.log('refrescar datos...'+e.target);
}
button.removeEventListener('click', calcularDatos, true)