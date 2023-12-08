// 9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal:

let numero;

for (numero = 1; numero <= 500; numero++) {
    document.write(numero);

    if (numero % 4 === 0) {
        document.write(' (Multiplo de 4)');

    } else if (numero % 9 === 0) {
        document.write(' (Multiplo de 9)');
    }

    document.write('<br>');

    if (numero % 5 === 0) {
        document.write('<hr>');
    }

}
