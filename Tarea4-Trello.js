let sueldo;
let sueldos = [];
let sumaSueldos= 0;

do {
    sueldo = parseFloat(prompt("Ingrese sueldo:"))
    if(!isNaN(sueldo) && sueldo !=0){
        sueldos.push(sueldo);
    }else{
        if(sueldo!=0){
            alert("no es un valor valido para sueldo");
        }
    }
} while (sueldo != 0);
sueldos.forEach(function(element){
    sumaSueldos += element;
});
document.write(`La suma de sueldos es ${sumaSueldos}.`);