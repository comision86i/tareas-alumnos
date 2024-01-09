/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

- Mostrar la longitud del arreglo.
- Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
- Añade en última posición la ciudad de París.
- Escribe por pantalla el elemento que ocupa la segunda posición.
- Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/
let ciudades = [];
do {
    ciudades.push(prompt("Ingrese nombre de una ciudad:"));
} while (confirm('¿Desea continuar?'));

document.write(`<p>El arreglo de ciudades tiene ${ciudades.length} elementos</p>`);
ciudades.push('Paris');
document.write('<ul>');
document.write(`<li>Primer elemento: ${ciudades[0]}</li>`);
document.write(`<li>Segundo elemento: ${ciudades[1]}</li>`);
document.write(`<li>Tercer elemento: ${ciudades[2]}</li>`);
document.write(`<li>Ultimo elemento: ${ciudades[ciudades.length-1]}</li>`);
document.write('</ul>');

ciudades[1] = 'Barcelona';
document.write('<h1>Arreglo de Ciudades</h1>');
document.write('<ul>');
for (let i = 0; i < ciudades.length; i++) {
    document.write(`<li>${ciudades[i]}</li>`);
}
document.write('</ul>');