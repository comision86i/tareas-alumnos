/* 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9
 */

let numero1 = parseInt(prompt("Ingrese su numero"));
let numero2 = parseInt(prompt("Ingrese otro numero"));
let numero3 = parseInt(prompt("Ingrese otro numero"));

if (numero1 >= numero2 && numero1 >= numero3) {
  document.write("El " + numero1 + " es el numero mas grande");
} else if (numero2 >= numero3 && numero2 >= numero1) {
  document.write("El " + numero2 + " es el numero mas grande");
} else if (numero3 >= numero1 && numero3 >= numero2) {
  document.write("El " + numero3 + " es el numero mas grande");
}
