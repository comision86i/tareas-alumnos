/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
 - Una propiedad titular con el valor "Alex".
 - Una propiedad saldo, teniendo como valor inicial 0.
 - Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
 - Un método extraer() que permita retirar la cantidad pasada como parámetro.
 - Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.*/
let dinero = 0;
var cuenta = {
    titular: 'Alex',
    saldo: 0,
    ingresar: function(dinero){
        alert('Depositando dinero...')
        this.saldo+= dinero;
    },
    extraer: function(dinero){
        if(dinero>this.saldo){
            alert('El monto a extraer supera el saldo en la cuenta...')
        }else{
            alert('Extrayendo dinero...')
            this.saldo-=dinero;
        }
    },
    informar: function(){
        return (`titular: ${this.titular}\n
                saldo: ${this.saldo}`)
    }
}
alert(`Bienvenido ${cuenta.titular}`);
do {
    do {
        op = prompt(`Seleccione una opcion:\n
                        1 - Estado de la cuenta
                        2 - Extraer dinero
                        3 - Depositar dinero`)
    } while (op!='1' && op!='2' && op!='3');
    switch (op) {
        case '1':
            alert(cuenta.informar());
            break;
        case '2':
            dinero = parseFloat(prompt('Ingrese la cantidad de dinero a extraer:'));
            cuenta.extraer(dinero);
            break;
        case '3':
            dinero = parseFloat(prompt('Ingrese la cantidad de dinero a depositar:'));
            cuenta.ingresar(dinero);
            break;
    }
} while (confirm('¿Desea seguir operando?'));