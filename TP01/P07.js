// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let num1 = parseInt(prompt('Ingrese un numero:'));
let num2 = parseInt(prompt('Ingrese otro numero:'));
let num3 = parseInt(prompt('Ingrese otro numero:'));

if(num1>num2 && num1>num3){
    document.write(`<h1>${num1} es mayor que ${num2} y ${num3}</h1>`);
}else if(num2>num1 && num2>num3){
    document.write(`<h1>${num2} es mayor que ${num1} y ${num3}</h1>`);
}else if(num3>num1 && num3>num2){
    document.write(`<h1>${num3} es mayor que ${num1} y ${num2}</h1>`);
}else{
    document.write(`<h1>Los numeros son iguales</h1>`);
}