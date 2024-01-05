// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let frase = prompt('Ingrese una frase:');
let vocal ='p', posicion = 0;
while(vocal=='p' && posicion<frase.length){
    if(('aeiouAeiou').includes(frase[posicion])){
        vocal = frase[posicion];
    }
    posicion++
}
alert(`La vocal '${vocal}' está en la posición ${posicion-1}`);