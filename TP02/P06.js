/*6- Realiza un script que escriba una pirámide del 1 al 30 */
let cadena;
for (let i = 1; i < 31; i++) {
    cadena = ''
    for (let j = 0; j < i; j++) {
        cadena = cadena + i;
    }
    document.write(`<p>${cadena}</p>`);
}