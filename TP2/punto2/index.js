// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

// Ejemplo:



// Input: 5
// Input: 50
// Input: hola10
// Output: Suficiente
// Output: Número erróneo
// Output: Introduce un número válido




let entrada = prompt('ingresa un numero del 1 al 10');
let nota = parseFloat(entrada);

if (!isNaN(nota) && nota >= 0 && nota <= 10 ){
    let calificacion = 
    nota <= 2 ? 'muy deficiente':
    nota <= 4 ? 'insuficiente':
    nota <= 6 ? 'suficiente':
    nota <= 9 ? 'notable':
    'sobresaliente';
    alert('calificacion ' + calificacion);
}else {
    document.write('introduce un numero valido');

}


// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

// Ejemplo:



// Input: 5
// Input: 50
// Input: hola10
// Output: Suficiente
// Output: Número erróneo
// Output: Introduce un número válido
// let nota = parseInt(prompt('ingrese la nota'))

// if(nota == 0 || nota == 2){
//     document.write('muy deficiente')
// }
// else if ( nota == 3   || nota == 4 ){
//     document.write('insuficiente')
// }
// else if (nota == 5  ||  nota == 6){
//     document.write("suficiente")
// }
// else if (nota == 7){
//     document.write("bien")
// }
// else if (nota ==8  ||  nota ==9 ){
//     document.write('notable')

// }
// else if (nota == 10 ){
//     document.write('sobresaliente')
// }
// else{
//     document.write('ingrese una nota valida')
// }



