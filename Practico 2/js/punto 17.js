// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let txt = prompt('Introduce un texto: ')
txtMin = txt.toLowerCase();
let i, f;
let posicion = 0;
let vocales = ['a', 'e', 'i', 'o', 'u']
let parar = false;

for (i = 0; i < txtMin.length; i++) {

    for (f = 0; f < vocales.length; f++) {

        if (vocales[f] == txtMin.charAt(i)) {
            posicion = i;
            parar = true;
            break;
        }
    } 
    if (parar) {
        break;
    }
}
document.write(`La primera vocal está en la posición ${posicion}`);
