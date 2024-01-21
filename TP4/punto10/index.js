// 10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, 
// el cual recibirá un objeto de tni.po Avió, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información 
// // en caso de encontrarlo, si no lo encontró indicar con un mens//
//  Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. 
// // Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo
//  si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

// Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos.
//  Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.aje



class Aeropuerto {
    constructor(nombreAeropuerto, listaAviones) {
        this._nombreAeropuert = nombreAeropuerto;
        this._listaAviones = listaAviones || [];
    }

    agregarAvion(avion) {
        this._listaAviones.push(avion);
    }

    buscarAvion(nombreAvion) {
        const resultado = this._listaAviones.find(function (avion) {
            return avion._nombre === nombreAvion;
        });
        if (resultado) {
            console.log(`avion encontrado el avion es ${nombreAvion}`);
        } else {
            console.log(`no se encontro avion`);
        }
    }
}

class Avion {
    constructor(nombre, capacidad, destino, listaPasajeros) {
        this._nombre = nombre;
        this._capacidad = capacidad;
        this._destino = destino;
        this._listaPasajeros = listaPasajeros || [];
    }

    metodoAbordar(pasajero) {
        if (this._listaPasajeros.length < this._capacidad) {
            this._listaPasajeros.push(pasajero);
            console.log('Hay capacidad');
        } else {
            console.log('no hay lugar disponible');
        }
    }
}

const aeropuertoInternacion = new Aeropuerto('aero puerto internacional');
const avion1 = new Avion('Avion1', 100, 'destino');
const avion2 = new Avion('Avion2', 300, 'destino');
const avion3 = new Avion('Avion3', 400, 'destino');

aeropuertoInternacion.agregarAvion(avion1);
aeropuertoInternacion.agregarAvion(avion2);
aeropuertoInternacion.agregarAvion(avion3);

aeropuertoInternacion.buscarAvion('Avion1');
aeropuertoInternacion.buscarAvion('Avion2');

avion1.metodoAbordar('pasajero6')
avion2.metodoAbordar('pasajero3')
