/*7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

 - aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
 - existeContacto(Contacto): indica si el contacto pasado existe o no.
 - listarContactos(): Lista toda la agenda
 - buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
 - eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
 - agendaLlena(): indica si la agenda está llena.
 - huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
*/
class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefonos = [];
        this.telefonos.push(telefono);
    }

    getNombre() {
        return this.nombre;
    }

    addTelefono(telefono) {
        this.telefonos.push(telefono);
    }

    mostrarContacto() {
        let telefonos = this.telefonos.join(', ');
        return `Nombre: ${this.nombre}\nTelefonos: ${telefonos}\n--------------------------------`;
    }
}

class Agenda {
    constructor(cantidad) {
        if(isNaN(cantidad)){
            this.cantidad = 10;
        }else{
            this.cantidad = cantidad;
        }
        this.contactos = [];
    }

    aniadirContacto(contacto) {
        let i = this.existeContacto(contacto.nombre);
        if(i!=-1){
            this.contactos[i].addTelefono(contacto.telefonos[0]);
        }else{
            this.contactos.push(contacto);
        }
        alert('Contacto añadido con éxito.');
    }

    existeContacto(nombre) {
        for (let i = 0; i < this.contactos.length; i++) {
            if (this.contactos[i] && this.contactos[i].nombre.toLowerCase() === nombre.toLowerCase()) {
                return i;
            }
        }
        return -1;
    }

    listarContactos() {
        let contactos = '';
        if(this.contactos.length>0){
            for (let i = 0; i < this.contactos.length; i++) {
                if (this.contactos[i]) {
                    contactos += this.contactos[i].mostrarContacto() + '\n';
                }
            }
        }else{
            contactos = 'No hay contactos';
        }
        return contactos;
    }

    buscarContacto(nombre) {
        let indice = this.existeContacto(nombre);
        if (indice !== -1) {
            return this.contactos[indice].mostrarContacto();
        }
        return 'El contacto no existe';
    }

    eliminarContacto(nombre) {
        let indice = this.existeContacto(nombre);
        if (indice !== -1) {
            this.contactos.splice(indice,1);
            return 'El contacto fue eliminado con éxito';
        }
        return 'El contacto no existe';
    }

    agendaLlena() {
        return this.huecosLibres()==0;
    }

    huecosLibres() {
        return this.cantidad - this.contactos.length;
    }
}

let cantidad = parseInt(prompt('Ingrese cantidad de contactos para la agenda'));
let agendaDeContactos = new Agenda(cantidad);

do {
    let op = 0;
    let nombre;
    
    do {
        op = parseInt(prompt(`Elija una opcion:
         1 - Añadir contacto
         2 - Buscar contacto
         3 - Eliminar contacto
         4 - Listar contactos`));
    } while (![1, 2, 3, 4].includes(op) && !isNaN(op));

    switch (op) {
        case 1:
            if(agendaDeContactos.agendaLlena()){
                alert('La agenda está llena');
            }else{
                nombre = prompt('Nombre de Contacto:');
                let numero = parseInt(prompt('Número de Contacto:'));
                agendaDeContactos.aniadirContacto(new Contacto(nombre, numero));
            }
            break;
        case 2:
            nombre = prompt('Nombre de contacto a buscar:');
            alert(agendaDeContactos.buscarContacto(nombre));
            break;
        case 3:
            nombre = prompt('Nombre de contacto a eliminar:');
            alert(agendaDeContactos.eliminarContacto(nombre));
            break;
        case 4:
            let contactos = agendaDeContactos.listarContactos();
            alert(contactos);
            break;
    }
    
} while (confirm('¿Desea seguir?'));
