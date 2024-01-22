/*1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.*/

document.addEventListener('DOMContentLoaded', AdivinaElNumero, false)

function AdivinaElNumero(e){
    let numero;
    let comenzarJuegoBtn = document.getElementById('comenzarJuego');
    let juegoContainer = document.getElementById('juegoContainer');
    let numeroInput = document.getElementById('numeroInput');
    let enviarNumeroBtn = document.getElementById('enviarNumero');

    comenzarJuegoBtn.addEventListener('click', function(){
        numero = Math.floor(Math.random()*100)+1;
        console.log(numero);
        juegoContainer.style.display = 'block'
        comenzarJuegoBtn.style.display = 'none'
    },false);

    enviarNumeroBtn.addEventListener('click',function(){
        let numeroIngresado = parseInt(numeroInput.value);
        if(isNaN(numeroIngresado)){
            alert('Ingrese un número válido');
        }else{
            if(numeroIngresado === numero){
                alert('Felicidades!!! adivinaste el número');
                reiniciar();
            }else if(numeroIngresado > numero){
                alert('Prueba con un número mas chico');
            }else{
                alert('Prueba con un número mas grande');
            }
        }
    },false)
    function reiniciar(){
        location.reload();
    }
}