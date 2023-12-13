// Dificultad:  🟢
// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

// Output:



// objeto.encender();
// objeto.apadar()
// auto encendido
// El auto se apagó

let auto = {
color:'rojo',
marca:'ferrari',
modelo:'f339',
year:'1999',
motor:'v10',
encender: function () {
    alert('El auto está encendido');
},
apagar: function () {
    alert('El auto está apagado');
}
}

auto.encender();
auto.apagar();