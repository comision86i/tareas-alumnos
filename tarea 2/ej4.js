/* 4.- Se ingresan tres notas de un alumno, si el promedio es mayor o igual a siete mostrar el mensaje 'Promocionado'. */

let x = parseInt(prompt("ingrese la primera nota: "));
let y = parseInt(prompt("ingrese la segunda nota: "));
let z = parseInt(prompt("ingrese la tercera nota: "));

let promedio = parseFloat((x+y+z)/3);
if (promedio >= 7){
    document.write("Promocionado");
}
else{
    document.write("No esta promocionado");
}