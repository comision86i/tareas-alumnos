// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

let numero = parseInt(prompt('Ingrese un número'));
if(numero%2==0){
    document.write(`<h1>El número ${numero} es divisible por 2</h1>`);
}else{
    if(numero%3==0){
        document.write(`<h1>El ${numero} es divisible por 3</h1>`);
    }else{
        if(numero%5==0){
            document.write(`<h1>El ${numero} es divisible por 5</h1>`);
        }else if(numero%7==0){
            document.write(`<h1>El ${numero} es divisible por 7</h1>`);
        }else{
            document.write(`<h1>El ${numero} no es divisible por 2,3,5 y 7</h1>`);
        }
    }
}