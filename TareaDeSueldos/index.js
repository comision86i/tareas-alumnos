// Realizar la carga de sueldos por teclado hasta que se ingrese el cero. 
// Almacenar todos los valores ingresados en un vector empleando el método push. 
// Mostrar la suma de sueldos ingresados.

let sueldos = [];
let ingreso;

do {
    ingreso = parseInt(prompt('Ingrese el sueldo (o ingrese 0 para finalizar):'));
    if (!isNaN(ingreso)){
        sueldos.push(ingreso);}
        else{
            alert('ingrese un numero valido')
        }
} while (ingreso !=0);
let sumaSueldos = sueldos.reduce((acumulador, sueldo) => acumulador + sueldo);
console.log('La suma de sueldos es:'+ sumaSueldos);
