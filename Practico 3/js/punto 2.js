// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.


let citys = []
let nameCitys;

do {
    nameCitys = prompt('Ingrese nombres de ciudades: ')
    if (nameCitys !== null && nameCitys !== '') {
        citys.push(nameCitys);
    }
    
} while (nameCitys != undefined);

document.write(`Longitud del array: ${citys.length}`)
document.write('<br>')
document.write('<hr>')

document.write(`Posición primera: ${citys[0]}`)
document.write('<br>')
document.write(`Posición tercera: ${citys[2]}`)
document.write('<br>')
document.write(`Posición última: ${citys[citys.length - 1]}`)
document.write('<br>')
document.write('<hr>')

citys.push('Paris')

document.write(`Elemento de la segunda posicion es: ${citys[1]}`)
document.write('<hr>')

citys.splice(1, 1, 'Barcelona')
document.write(`Se sustituye el elemento de la segunda posición, y se agrega Paris al final: ${citys}`)
document.write('<hr>')