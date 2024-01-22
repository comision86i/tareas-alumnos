// 4- Crear una web con un reloj
function actualizarReloj() {
    var ahora = new Date();

    var numeroDia = ahora.getDate();
    var opcionesDia = { weekday: 'long' }; //formato
    var Dia = ahora.toLocaleDateString('es-ES', opcionesDia).charAt(0).toUpperCase() +
    ahora.toLocaleDateString('es-ES', opcionesDia).slice(1);
    var opcionesMes = { month: 'long' };
    var Mes = ahora.toLocaleDateString('es-ES', opcionesMes).charAt(0).toUpperCase() +
    ahora.toLocaleDateString('es-ES', opcionesMes).slice(1);
    var Anio = ahora.getFullYear();

    let fecha = Dia +' '+ numeroDia + ' de ' + Mes +' del '+ Anio;

    var ahora = new Date();
    var horas = ahora.getHours() % 12 || 12;
    var minutos = ahora.getMinutes();
    var segundos = ahora.getSeconds();
    var periodo = ahora.getHours() < 12 ? 'AM' : 'PM';

    document.getElementById('reloj').innerHTML = `
        <h4>${fecha}</h4>
        <div class="d-flex flex-row justify-content-center align-items-center">
            <p class="hora">${horas}:${minutos}:</p>
            <div class="d-flex flex-column">
                <p id="p1">${periodo}</p>
                <p>${segundos}</p>
            </div>
        </div>
    `;
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);

// Inicializar el reloj al cargar la página
actualizarReloj();