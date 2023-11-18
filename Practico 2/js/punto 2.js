// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.


let nota = parseFloat(prompt('Ingrese la nota de 0 a 10: '))

if (nota >= 0 && nota <= 2) {
    document.write('<h3> Muy deficiente </h3>')
    
} else if (nota >= 3 && nota <= 4) {
    document.write('<h3> Insuficiente </h3>')

} else if (nota >= 5 && nota <= 6) {
    document.write('<h3> Suficiente </h3>')

} else if (nota == 7) {
    document.write('<h3> Bien </h3>')

} else if (nota >= 8 && nota <= 9) {
    document.write('<h3> Notable </h3>')

} else if (nota == 10) {
    document.write('<h3> Sobresaliente </h3>')

} else if (nota > 10) {
    document.write('<h3> Número erróneo </h3>')

} else {
    document.write('<h3> Introduce un número válido </h3>')
}