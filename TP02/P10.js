/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.*/
let filas,columnas;
let num;
do {
    filas = parseInt(prompt('Ingrese un numero de filas:'));
} while (filas<0 || filas >10 || isNaN(filas));
do {
    columnas = parseInt(prompt('Ingrese un numero de columnas:'));
} while (columnas<0 || columnas >10 || isNaN(columnas));

num = filas*columnas;

document.write('<table class="table table-striped"><tbody>');
for (let i = 0; i < filas; i++) {
    document.write('<tr>');
    for (let j = 0; j < columnas; j++) {
        document.write(`<td> ${num} </td>`);
        num--;
    } 
    document.write('</tr>');
}
document.write('</tbody></table>');