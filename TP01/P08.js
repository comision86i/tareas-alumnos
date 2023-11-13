// 8.- Escribe un programa que pida un número y diga si es divisible por 2
let numero = parseInt(prompt('Ingrese un número'));
if(numero%2==0){
    document.write(`<h1>El número ${numero} es divisible por 2</h1>`);
}else{
    document.write(`<h1>El número ${numero} no es divisible por 2</h1>`);
}