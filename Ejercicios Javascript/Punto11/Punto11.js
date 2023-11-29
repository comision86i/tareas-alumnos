let numero = parseInt (prompt( 'Ingrese un número entero'));
let divisores = "";

if( numero % 2 == 0){
    divisores += "2";
}
if (numero % 3 == 0){
    divisores += "3";
}
if(numero % 5 == 0){
    divisores += "5";
}
if (numero % 7 == 0){
    divisores += "7";
}
if(numero !== ""){
    document.write( numero  + ' Es divisible por: ' +  divisores);
}
