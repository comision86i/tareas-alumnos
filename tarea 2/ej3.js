/* 3.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor. */

let c = parseInt(prompt("ingrese un numero: "));
let d = parseInt(prompt("ingrese otro numero: "));

if (c>d){   
   document.write("el mayor es: " + c); 
}
else if (c==d){
    document.write("los numeros son iguales");
}
else{
    document.write("el mayor es: " + d);
}