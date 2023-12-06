/* 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible) */

let num = parseFloat(prompt("ingrese un numero: "));
if((num%2)==0){
    document.write("El numero es divisible por 2");
    if((num%3)==0){
        document.write(" Y por 3");
        if((num%5)==0){
            document.write(" , tambien por 5");
            if((num%7)==0){
                document.write(" y por 7");
            }
        }
    }  
}
else if((num%3)==0){
    document.write("El numero es divisible por 3");
    if((num%5)==0){
        document.write(" , tambien por 5");
        if((num%7)==0){
            document.write(" y por 7");
        }
    }
}
else if((num%5)==0){
    document.write("El numero es divisible por 5");
    if((num%7)==0){
        document.write(" y por 7");
    }
}
else if((num%7)==0){
    document.write("El numero solo es divisible por 7");
}
else{
    document.write("El numero no es divisible por ninguno");
}
