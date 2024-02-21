// 5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.
let hora = minutos = segundos = milisegundos = "0" + 0 , cronometro;

let empezarBoton = document.getElementById('empezar');
let pausarBoton = document.getElementById('pausar');
let reiniciarBoton = document.getElementById('reiniciar');

empezarBoton.addEventListener('click',empezar)
pausarBoton.addEventListener('click',pausar)
reiniciarBoton.addEventListener('click',reiniciar)

function empezar (){
    empezarBoton.classList.add('activar');
    pausarBoton.classList.remove('pausarActivar')
    cronometro=setInterval(() => {
    milisegundos++
    milisegundos = milisegundos < 10 ? "0" + milisegundos : milisegundos;
        if (milisegundos == 100){
            segundos++
            segundos = segundos < 10 ? "0" + segundos : segundos;
            milisegundos = "0" + 0;
        if(segundos==60){
            minutos++
            minutos = minutos < 10 ? "0" + minutos : minutos;
            segundos = "0" + 0
        }
        if(minutos == 60 ){
            hora++
            hora = hora < 10 ? "0" + hora : hora;
            minutos = "0" + 0
        }

        }

        actualizarInter();
}, 10);

}

function pausar (){
    empezarBoton.classList.remove('activar');
    pausarBoton.classList.remove('pausarActivar');
   clearInterval(cronometro);

}
function reiniciar (){
    empezarBoton.classList.remove('activar');
    pausarBoton.classList.remove('pausarActivar');
    clearInterval(cronometro);
    hora=minutos=segundos=milisegundos= "0" + 0;
    actualizarInter();
}

function actualizarInter (){
    document.getElementById('milisegundos').textContent = milisegundos;
    document.getElementById('segundos').textContent = segundos;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('hora').textContent = hora;
}


















