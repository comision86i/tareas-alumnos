// 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

let cadena = prompt('Introduce una cadena de texto: ');
let numChar = cadena.length;
let caracter, i;

for (i = 0; i < numChar; i++) {
    caracter = cadena.charAt(i);

    if (i == numChar - 1) {
        document.write(caracter);

    } else {
        document.write(`${caracter}-`);
    }
}