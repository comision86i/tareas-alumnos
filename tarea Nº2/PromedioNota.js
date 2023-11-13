let nota1, nota2, nota3, suma, promedio;
nota1= parseInt (prompt("Ingrese primer nota"));
nota2= parseInt (prompt("Ingrese segunda nota"));
nota3= parseInt (prompt ("Ingrese tercera nota"));
promedio = (nota1 + nota2 + nota3) /3;

if(promedio>=7){
    alert ("Promocionado con promedio:" + promedio)
}
else if( promedio< 7 ){
    alert ("No promocionado con: " + promedio)
}
else {
    alert ("Los datos ingresados son incorrectos ")
}


