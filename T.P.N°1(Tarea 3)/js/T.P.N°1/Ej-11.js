/* 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20
input: 210




Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.
 */

let numero1 = parseInt(prompt("Ingrese su numero"));

if (
  numero1 % 2 === 0 ||
  numero1 % 3 === 0 ||
  numero1 % 5 === 0 ||
  numero1 % 7 === 0
) {
  document.write("El numero es divisible por 2,3,5,7");
} else {
  document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}
