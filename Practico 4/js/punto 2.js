// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta. 
// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

let cuenta = {
    titular: 'Alex',
    saldo: 0,
    
    ingresar: function(){
        let dinero = parseInt(prompt('Ingrese la cantidad de dinero a depositar: '));
        this.saldo += dinero;
        alert(`Saldo actual: ${this.saldo}`);
    },
    
    extraer: function(){
        let dinero = parseInt(prompt('Ingrese la cantidad de dinero a extraer: '));
        if (dinero > this.saldo) {
            alert('Saldo insuficiente')
        } else {
            this.saldo -= dinero;
            alert(`Saldo actual: ${this.saldo}`);
        }
    },
    
    informar: function(){
        alert(`El estado actual de su cuenta es: usted ${this.titular} tiene $${this.saldo}`);
    }
}

console.log(`Titular: ${cuenta.titular}`);
console.log(`Saldo: ${cuenta.saldo}`);
cuenta.ingresar();
cuenta.extraer();
cuenta.informar();