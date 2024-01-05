/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
*/
let cadena = prompt("Ingrese texto:")
while (confirm('¿Desea seguir?')){
    cadena = cadena + ' - ' + prompt('Ingrese texto');
}
document.write(cadena);