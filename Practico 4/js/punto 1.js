// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

let auto = {
    color : 'Blanco',
    marca : 'Toyota',
    modelo: 'Supra MK4',
    motor : '2JZ-GTE',
    
    encender: function(){
        alert('El auto se encendió');
    },
    apagar: function(){
        alert('El auto se apagó');
    }
};

console.log(`Color: ${auto.color}`);
console.log(`Marca: ${auto.marca}`);
console.log(`Modelo: ${auto.modelo}`);
auto.encender();
auto.apagar();

