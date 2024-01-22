/*5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.*/

let cronometro;
let milisegundos = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;

function actualizarCronometro() {
    milisegundos++;
    if(milisegundos ===100){
        milisegundos = 0;
        segundos++;
        if (segundos === 60) {
            segundos = 0;
            minutos++;
            if (minutos === 60) {
                minutos = 0;
                horas++;
            }
        }
    }

    let tiempoFormateado = 
        (horas < 10 ? '0' : '') + horas + ':' +
        (minutos < 10 ? '0' : '') + minutos + ':' +
        (segundos < 10 ? '0' : '') + segundos + ':' +
        (milisegundos < 10 ? '0' : '') + milisegundos;

    document.getElementById('cronometro').innerText = tiempoFormateado;
}
function iniciarCronometro() {
    cronometro = setInterval(actualizarCronometro, 10);
}

function pausarCronometro() {
    clearInterval(cronometro);
}

function resetearCronometro() {
    clearInterval(cronometro);
    segundos = 0;
    minutos = 0;
    horas = 0;
    document.getElementById('cronometro').innerText = '00:00:00:00';
}