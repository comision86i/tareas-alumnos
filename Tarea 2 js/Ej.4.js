/* 4.- Se ingresan tres notas de un alumno, si el promedio es mayor o igual a siete mostrar el mensaje 'Promocionado'. */

let numero1 = parseInt(prompt("Ingrese el primer numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));
let numero3 = parseInt(prompt("Ingrese el tercer numero"));

if (numero1 > numero2 && numero1 > numero3) {
  document.write("El numero " + numero1 + " es el mas grande");
} else if (numero2 > numero1 && numero2 > numero3) {
  document.write("El numero " + numero2 + " es el mas grande");
} else if (numero3 > numero1 && numero3 > numero2) {
  document.write("El numero " + numero3 + " es el mas grande");
}
