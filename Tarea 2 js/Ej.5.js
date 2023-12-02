/* 5.- Solicitar que se ingrese dos veces una clave. Mostrar un mensaje si son iguales (tener en cuenta que para ver si dos variables tienen el mismo valor almacenado debemos utilizar el operador ==) */

let clave = prompt("Ingrese por primera vez su clave");
let clave2 = prompt("Ingrese por segunda vez su clave");

if (clave == clave2) {
  document.write("Las claves son iguales");
} else {
  document.write("Las claves no son iguales");
}
