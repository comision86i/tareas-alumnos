// 10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
// Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

// Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.


class Avion {
    constructor(nombre, capacidad, destino) {
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.destino = destino;
        this.pasajeros = [];
    }

    abordar(pasajero) {
        if (this.pasajeros.length < this.capacidad) {
            this.pasajeros.push(pasajero);
            console.log(`${pasajero.nombre} ha abordado el avión ${this.nombre} con destino a ${this.destino}.`);
        } else {
            console.log(`El avión ${this.nombre} está lleno. No se puede abordar.`);
        }
    }
}

class Aeropuerto {
    constructor() {
        this.nombreAeropuerto = 'Aeropuerto Internacional';
        this.aviones = [];
    }

    agregarAvion(avion) {
        this.aviones.push(avion);
    }

    buscarAvion(nombreAvion) {
        const avionEncontrado = this.aviones.find(avion => avion.nombre === nombreAvion);
        if (avionEncontrado) {
            console.log(`Avión ${avionEncontrado.nombre} encontrado:`);
            console.log(`Capacidad: ${avionEncontrado.capacidad}`);
            console.log(`Destino: ${avionEncontrado.destino}`);
            console.log(`Pasajeros:`);
            avionEncontrado.pasajeros.forEach((pasajero, indice) => {
                console.log(`${indice + 1}. ${pasajero.nombre}`);
            });
        } else {
            console.log(`No se encontró el avión ${nombreAvion}.`);
        }
    }
}

let avion1 = new Avion('Boeing 747', 550, 'Madrid');
let avion2 = new Avion('Airbus A380', 469, 'París');
let avion3 = new Avion('Pilatus PC-6', 50, 'Canadá');

const aeropuerto = new Aeropuerto();

aeropuerto.agregarAvion(avion1);
aeropuerto.agregarAvion(avion2);
aeropuerto.agregarAvion(avion3);

aeropuerto.buscarAvion('Boeing 747')

let pasajero1 = { nombre: 'Julio' };
let pasajero2 = { nombre: 'Estefania' };
let pasajero3 = { nombre: 'Christian' };

avion1.abordar(pasajero1);
avion2.abordar(pasajero2);
avion3.abordar(pasajero3);