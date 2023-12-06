/* Escribe un programa que pida una frase y escriba las vocales que aparecen */

let frase = prompt("ingrese una frase");
let vocales = frase.match(/[aeiou]/g);

document.write(vocales);