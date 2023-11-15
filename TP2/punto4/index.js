// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let numero = 0;
let suma = 0;
do {
    numero = prompt('ingrese un numero');
    console.log (numero);
    if (!isNaN(parseInt(numero)) && numero !=null){
        suma = suma + parseInt(numero);
        console.log ('suma ' + suma);
    }else{
if (numero != null){
alert(numero + "no es un numero"); 
}
    }
} while (numero !=null)
document.write4
('total ' + suma);

// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
// let acumulador = 0
// do {
//     let numero = parseInt(prompt('ingrese un numero'))
//     if (numero != numero ){
//         alert('solo puede ingresar numeros')

//     }
//     else {
//         acumulador += numero 

//     }
// } while (confirm('seguir ingresando numeros?'));
// console.log(acumulador)