/*6- Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde donde comenzará a decrementar el contador. Debe contener los botones, iniciar, pausar y reset.*/

let temporizador;
let tiempoRestante;

function actualizarTemporizador() {
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;

    const tiempoFormateado =
        (minutos < 10 ? '0' : '') + minutos + ':' +
        (segundos < 10 ? '0' : '') + segundos;

    document.getElementById('temporizador').innerText = tiempoFormateado;

    if (tiempoRestante === 0) {
        clearInterval(temporizador);
        alert('¡Tiempo terminado!');
        resetearTemporizador()
    } else {
        tiempoRestante--;
    }
}

function iniciarTemporizador() {
    tiempoRestante = document.getElementById('tiempo').value;
    temporizador = setInterval(actualizarTemporizador, 1000);
}

function pausarTemporizador() {
    clearInterval(temporizador);
}

function resetearTemporizador() {
    clearInterval(temporizador);
    document.getElementById('temporizador').innerText = '00:00';
    document.getElementById('tiempo').value = 60;
}