/* Realizar la carga de sueldos por teclado hasta que se ingrese el cero. Almacenar todos los valores ingresados en un vector empleando el método push. Mostrar la suma de sueldos ingresados. */

let Sueldos = [];
let i = 0;
let c = 0;
let cond = 1;
let sumaSueldos = 0;
do{
    let sueldoIngresado= parseFloat(prompt("Ingrese un sueldo: "));
    Sueldos.push(sueldoIngresado);
    c++;
    cond = prompt("Ingrese un 0 si desea cancelar el ingreso, de lo contrario ingrese cualquier otro numero: ");
}while(cond!=0);

for(i=0 ; i<c ; i++){
    sumaSueldos = sumaSueldos + Sueldos[i];
}

document.write(sumaSueldos);