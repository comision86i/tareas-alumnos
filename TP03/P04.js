/*4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.*/
let numero;
do {
    numero = parseInt(prompt('Ingrese un número:'))
    if(!isNaN(numero)){
        let respuesta = esPar(numero);
        alert(respuesta);
    }else{
        alert('No es un número');
    }
} while (confirm('¿Desea continuar?'));

function esPar(numero){
    if(numero%2==0){
        return 'Es PAR';
    }else{
        return 'Es IMPAR';
    }
}