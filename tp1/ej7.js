/* 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres. */

let c = parseInt(prompt("ingrese un numero: "));
let d = parseInt(prompt("ingrese otro numero: "));
let e = parseInt(prompt("ingrese otro numero: "));

if (c>d && c>e){   
   document.write("el mayor es: " + c); 
}
else if (d>c && d>e){
    document.write("el mayor es: " + d);
}
else{
    document.write("el mayor es: " + e);
}