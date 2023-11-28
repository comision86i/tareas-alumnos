// Realizar la carga de sueldos por teclado hasta que se ingrese el cero. Almacenar todos los valores ingresados en un vector empleando el método push. Mostrar la suma de sueldos ingresados.

let sueldos = [];
let sueldo;

do {
  sueldo = parseInt(prompt("Ingrese el sueldo:"));
  if (sueldo !== 0) {
    sueldos.push(sueldo);
  }
} while (sueldo !== 0);
document.write(`<h4> Sueldos ingresados: ${sueldos} </h4>`);
document.write('<br>')

let sumaSueldos = 0;
for (let acumulador = 0; acumulador < sueldos.length; acumulador++) {
  sumaSueldos = sumaSueldos + sueldos[acumulador];
}

document.write(`<h4> Suma de sueldos: ${sumaSueldos} </h4>`);


