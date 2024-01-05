/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
 */
let numero
let suma = 0;
do {
    numero = parseFloat(prompt("Ingrese un numero:"));
    if(isNaN(numero)){
        alert('No es un numero');
    }else{
        suma += numero
    }
} while (confirm("¿Desea seguir?"));
alert(`La suma es: ${suma}`);