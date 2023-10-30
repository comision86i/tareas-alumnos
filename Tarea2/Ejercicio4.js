//4.- Se ingresan tres notas de un alumno, si el promedio es mayor o igual a siete mostrar el mensaje 'Promocionado'.
alert("A CONTINUACIÓN VA A INGRESAR TRES NOTAS");
let nota1 = parseFloat(prompt("Primera nota:","10"));
let nota2 = parseFloat(prompt("Segunda nota:","10"));
let nota3 = parseFloat(prompt("Tercera nota:","10"));
let promedio = ((nota1+nota2+nota3)/3).toFixed(2);
if(promedio>=7){
    document.write(`<p><strong>PROMOCIONADO</strong> con nota ${promedio}</p>`); 
}else{
    document.write(`<p><strong>NO PROMOCIONADO</strong> con nota ${promedio}</p>`); 
}