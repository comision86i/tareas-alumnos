// 6. - Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let num1 = parseInt(prompt('Ingrese un numero:'));
let num2 = parseInt(prompt('Ingrese otro numero:'));

if(num1>num2){
    document.write(`<h1>${num1} es mayor que ${num2}</h1>`);
}else if(num2>num1){
    document.write(`<h1>${num2} es mayor que ${num1}</h1>`);
}else{
    document.write(`<h1>${num2} es igual que ${num1}</h1>`);
}