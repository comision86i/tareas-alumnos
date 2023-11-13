// 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
// Nota: Tener en cuenta la siguiente función: parseInt
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
let num1 = parseInt(prompt('Ingrese un numero:'));
let num2 = parseInt(prompt('Ingrese otro numero:'));
document.write(`<h1>${num1} + ${num2} = ${num1+num2}</h1>`);