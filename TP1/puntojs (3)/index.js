// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
// Ejemplo: 

// input: 20


// Output: El 20 es divisible por 2.

let numero = parseFloat(prompt('ingrese un numero'));


if (numero % 2 === 0){
    document.write('el numero es divisible por 2');
}

else if (numero % 3 === 0){
    document.write('el numero es divisible por 3');
}

else if (numero % 5 === 0){
    document.write('el numero ingresado es divisible por 5');
}

else if (numero % 7 === 0){
    document.write('el numero es divisible por 7');
}
else {
document.write('no es divisible por ningun numero')
}