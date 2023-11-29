// 15- Realiza un script que cuente el número de vocales que tiene un texto.
let palabra = prompt('ingresa una palabra');
palabra = palabra.toLocaleUpperCase();
let vocales = '';
let contador = 0;

for (let i = 0; i < palabra.length; i++){
    let vocales = palabra.charAt(i);
    if (
        vocales == 'A' ||
        vocales == 'E' ||
        vocales == 'I' ||
        vocales == 'O' ||
        vocales == 'U' 
    ){
    contador++;
    }
}
document.write(`numero de vocales ${contador}`);

// otra manera que se me ocurrio hacerlo 

// let palabra = prompt('ingrese una palabra');
// palabra = palabra.toLocaleUpperCase();
// let vocales = ["A", "E", "I", "O", "U"];
// let contador = 0 ;

// for (let i=0; i < palabra.length; i++){
//     let letras = palabra.charAt(i);
//     if (vocales.includes(letras));{
//         contador++
//     }
// }
// document.write(`numero de vocales ${contador}`)