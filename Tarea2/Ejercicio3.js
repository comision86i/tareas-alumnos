//3.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let num1 = parseInt(prompt("Ingrese un numero: "));
let num2 = parseInt(prompt("Ingrese otro numero: "));
document.write(`<h1>¿MAYOR O IGUAL?</h1>`);
if(num1>num2){
    document.write(`<p><strong>${num1} es mayor que ${num2}.</strong></p>`);
}else if(num1<num2){
        document.write(`<p><strong>${num2} es mayor que ${num1}.</strong></p>`);
}else if(num1==num2){
    document.write(`<p><strong>${num1} y ${num2} son iguales.</strong></p>`);
}else{
    document.write("ERROR");
}