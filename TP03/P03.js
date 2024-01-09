/*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.*/
let apariciones = new Array(11).fill(0);
for(let i=0; i<50;i++){
    let dado1 = Math.floor(Math.random()*6)+1;
    let dado2 = Math.floor(Math.random()*6)+1;
    let suma = dado1 + dado2;
    apariciones[suma-2]++;
}
document.write('<table class="table text-center w-25 m-auto"><thead><tr><th>Suma</th><th>Apariciones</th></tr></thead><tbody>');
for (let i = 0; i < apariciones.length; i++) {
    document.write(`<tr>
                        <td>${i+2}</td>
                        <td>${apariciones[i]}</td>
                    </tr>`);
}
document.write('</tbody></table>');