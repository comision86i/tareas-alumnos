// 15- Realiza un script que cuente el número de vocales que tiene un texto.

let cadena = prompt('Introduce una cadena de texto: ');
let numChar = cadena.length;
cadena = cadena.toLowerCase();
let vocal, i;
let contador = 0;

for (i = 0; i < numChar; i++) {
    vocal = cadena.charAt(i);

    switch (vocal) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            contador++;
            break;
    }
}
document.write(`El texto tiene ${contador} vocales`);