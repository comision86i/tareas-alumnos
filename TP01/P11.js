// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

let numero = parseInt(prompt('Ingrese un número'));
if(numero%2==0){
    document.write(`<h1>El número ${numero} es divisible por 2</h1>`);
}
if(numero%3==0){
    document.write(`<h1>El ${numero} es divisible por 3</h1>`);
}
if(numero%5==0){
    document.write(`<h1>El ${numero} es divisible por 5</h1>`);
}
if(numero%7==0){
    document.write(`<h1>El ${numero} es divisible por 7</h1>`);
}
if(numero%2!=0 && numero%3!=0 && numero%5!=0 && numero%7!=0){
    document.write(`<h1>El ${numero} no es divisible por 2,3,5 y 7</h1>`);
}