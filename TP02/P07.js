/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  */
let num;
let cadena;
do {
    num = parseInt(prompt('Ingrese un numero del 1 al 50:'));
} while (num<0 || num >50 || isNaN(num));

for (let i = num; i > 0; i--) {
    cadena = ''
    for (let j = 0; j < i; j++) {
        cadena = cadena + i;
    }
    document.write(`<p>${cadena}</p>`);
}