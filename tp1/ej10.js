/* Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro) */

let num = parseFloat(prompt("ingrese un numero: "));
if((num%2)==0){
    document.write("El numero es divisible por 2");
}
else if((num%3)==0){
    document.write("El numero es divisible por 3");
}
else if((num%5)==0){
    document.write("El numero es divisible por 5");
}
else if((num%7)==0){
    document.write("El numero es divisible por 7");
}
else{
    document.write("El numero no es divisible por ninguno");
}