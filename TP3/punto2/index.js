// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, 
// cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

// Ejemplo:
// Input:
// ['Nueva York, Estados Unidos', 'Barcelona, España', 'Tokio, Japón', 'Londres, Reino Unido', 'Roma, Italia', 'Pekín, China', 'Río de Janeiro, Brasil', 'Ámsterdam, Países Bajos', 'Sídney, Australia', 'El Cairo, Egipto']
   // i<ciudades.length; i++
// Output:


let ciudades = []
let ingreso;

do {
    ingreso = prompt('ingrese ciudades')
    ciudades.push(ingreso)


} while (confirm(ingreso));

console.log(ciudades[0])
console.log(ciudades[2])
console.log(ciudades[9])
ciudades.push('Paris')
ciudades.splice(1,0,'Barcelona')
ciudades.forEach(function(elemento){
    document.write(elemento,'<br>')
}
)





