/* 5.- Solicitar que se ingrese dos veces una clave. Mostrar un mensaje si son iguales (tener en cuenta que para ver si dos variables tienen el mismo valor almacenado debemos utilizar el operador ==) */

let clave = prompt("Ingrese la clave: ");
let claveDos = prompt("Ingrese la clave de nuevo: ");

if(clave == claveDos){
    document.write("Las claves coinciden");
}