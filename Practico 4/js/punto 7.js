// 7- Nos piden realizar una agenda telefónica de contactos.

// Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

// Los métodos de la agenda serán los siguientes:

// aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Contacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

// Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.


class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }

    equals(other) {
        return this.nombre === other.nombre;
    }
}

class Agenda {
    constructor(capacidad = 10) {
        this.capacidad = capacidad;
        this.contactos = new Array(this.capacidad);
        this.indice = 0;
    }

    aniadirContacto(contacto) {
        if (this.agendaLlena()) {
            console.warn("La agenda no puede almacenar más contactos.");
            return;
        }

        this.contactos[this.indice] = contacto;
        this.indice++;
        console.warn("Contacto añadido correctamente.");
    }

    existeContacto(contacto) {
        return this.contactos.some(c => c.equals(contacto));
    }

    listarContactos() {
        console.warn("Contactos:");
        this.contactos.forEach((contacto, indice) => {
            console.log(`${indice + 1}. ${contacto.nombre}: ${contacto.telefono}`);
        });
    }

    buscarContacto(nombre) {
        const contacto = this.contactos.find(c => c.nombre === nombre);
        if (contacto) {
            console.warn(`Teléfono de ${nombre}: ${contacto.telefono}`);
        } else {
            console.warn("Contacto no encontrado.");
        }
    }

    eliminarContacto(contacto) {
        const indice = this.contactos.findIndex(c => c.equals(contacto));
        if (indice !== -1) {
            this.contactos.splice(indice, 1);
            console.warn("Contacto eliminado correctamente.");
        } else {
            console.warn("Contacto no encontrado.");
        }
    }

    agendaLlena() {
        return this.indice === this.capacidad;
    }

    huecosLibres() {
        return this.capacidad - this.indice;
    }
}

const agenda = new Agenda();

let opcion;

do {
    console.log("Menú:");
    console.log("1. Añadir contacto");
    console.log("2. Existe contacto");
    console.log("3. Listar contactos");
    console.log("4. Buscar contacto");
    console.log("5. Eliminar contacto");
    console.log("6. Agenda llena");
    console.log("7. Huecos libres");
    console.log("8. Salir");

    opcion = prompt("Seleccione una opción: ");

    switch (opcion) {
        case "1":
            const nombre = prompt("Introduzca el nombre del contacto: ");
            const telefono = prompt("Introduzca el teléfono del contacto: ");
            agenda.aniadirContacto(new Contacto(nombre, telefono));
            break;
        case "2":
            const nombreExistencia = prompt("Introduzca el nombre del contacto: ");
            const telefonoExistencia = prompt("Introduzca el teléfono del contacto: ");
            const contactoExistencia = new Contacto(nombreExistencia, telefonoExistencia);
            console.warn(agenda.existeContacto(contactoExistencia) ? "El contacto existe." : "El contacto no existe.");
            break;
        case "3":
            agenda.listarContactos();
            break;
        case "4":
            const nombreBusqueda = prompt("Introduzca el nombre del contacto: ");
            agenda.buscarContacto(nombreBusqueda);
            break;
        case "5":
            const nombreEliminar = prompt("Introduzca el nombre del contacto a eliminar: ");
            const telefonoEliminar = prompt("Introduzca el teléfono del contacto a eliminar: ");
            const contactoEliminar = new Contacto(nombreEliminar, telefonoEliminar);
            agenda.eliminarContacto(contactoEliminar);
            break;
        case "6":
            console.warn(agenda.agendaLlena() ? "La agenda está llena." : "La agenda no está llena.");
            break;
        case "7":
            console.warn(`La agenda tiene ${agenda.huecosLibres()} huecos libres.`);
            break;
        case "8":
            console.warn("Saliendo...");
            break;
        default:
            console.warn("Opción no válida.");
    }
} while (opcion !== "8");