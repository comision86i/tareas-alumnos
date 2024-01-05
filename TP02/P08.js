/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50)*/
let num;
let cadena;
do {
    num = parseInt(prompt('Ingrese un numero del 1 al 50:'));
} while (num<0 || num >50 || isNaN(num));

for (let i = 1; i <= num; i++) {
    cadena = ''
    for (let j = 0; j < i; j++) {
        cadena = cadena + i;
    }
    document.write(`<p>${cadena}</p>`);
}