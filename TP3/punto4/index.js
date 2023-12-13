// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una 
// cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

FuntionAnonima
let entero = function  (numero){
 if(numero % 2 === 0){
    return 'el numero es par'
 }
 else {
    return 'el numero es IMPAR'
 }
}
let input = parseInt(prompt('ingrese un numero'))
let resultado = entero(input)
console.log(resultado)


// confunctionFlecha
// let entero = (numero) => {
//     if(numero % 2 === 0){
//        return 'el numero es par'
//     }
//     else {
//        return 'el numero es IMPAR'
//     }
// }
//    console.log(entero(3))


// funtionTradicional
// function entero (numero){
//     if (numero % 2 ===0){
//     return 'es par'}
//     else{
//         return'es IMPAR'
//     }
// }
// console.log(entero(8))