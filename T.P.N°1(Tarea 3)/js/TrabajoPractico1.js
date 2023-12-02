/* 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
 */

alert("Hola Mundo");

/* 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write). */

document.write("Hello Word");

/* 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5. */

document.write(3 + 5);

/* 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
Ejemplo: 

input: Coder 
Output: Hola Coder
 */

let nombreUsuario = prompt("ingrese Su Usuario");

document.write("Hola " + nombreUsuario);

/* 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
 */

let numero1 = parseInt(prompt("Ingrese un Numero"));
let numero2 = parseInt(prompt("Ingrese otro Numero"));

document.write("La suma de estos numero es " + (numero1 + numero2));
