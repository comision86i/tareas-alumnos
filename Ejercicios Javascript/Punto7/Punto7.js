let num1, num2, num3;
num1 = parseInt (prompt("Ingrese el primer número"));
num2 = parseInt (prompt ("Ingrese el segundo número"));
num3 = parseInt (prompt ("Ingrese el tercer número"));

if (num1 > num2 && num1 > num3)
 {document.write ("El número más alto es: " + num1)}
 else if (num2 > num1 && num2 > num3){
    document.write ("El número más alto es: " + num2)}
 else {
    document.write ("El número más alto es: " + num3)}


 