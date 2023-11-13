let numero1 = parseFloat(prompt('ingrese el priemer numero'));
let numero2 = parseFloat(prompt('ingrse el segundo numero'));
let numero3= parseFloat(prompt('ingrese el tercer numero'));


if (numero1 > numero2 && numero1 > numero3){
    document.write('el numero 1 es el mayor');
}

else if (numero2 > numero1 && numero2 > numero3){
    document.write('el numero 2 es el mas grande');
}
else if (numero3 > numero1 && numero3 > numero2){
document.write('el numero 3 es el mas grande')
}
else{
document.write('los numeros son iguales');
}