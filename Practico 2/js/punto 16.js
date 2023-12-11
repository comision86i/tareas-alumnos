// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let cadena = prompt('Ingrese un texto: ')
let reves = ''
let i = cadena.length;

for (i >= 0; i--;) {
    reves = reves + cadena.charAt(i)
}
document.write(reves)