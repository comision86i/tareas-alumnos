// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta. 

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.



class Cuenta {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(dinero) {
        this.saldo += dinero;
    }

    extraer(dinero) {
        this.saldo -= dinero;
    }

    informar() {
        document.write(`Titular: ${this.titular} <br>`);
        document.write(`Saldo actual: ${this.saldo}<br>`);
    }
}


const cliente1 = new Cuenta('Nico', 0);


cliente1.informar();

cliente1.depositar(1500);
cliente1.informar();

cliente1.extraer(300);
cliente1.informar();

