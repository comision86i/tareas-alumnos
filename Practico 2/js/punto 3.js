// 3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let cadena;
let resultado = ''

do {
    cadena = prompt('Escribe la o las cadenas de texto que mas te gusten: ')
    document.write(resultado)
    
    if (resultado = '') {
        resultado = resultado + cadena;

    } else {
        resultado = (`${cadena} - `)
    }
    
} while (cadena != undefined);
