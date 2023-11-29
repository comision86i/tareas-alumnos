// / 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo
//  “hola que tal” deberá mostrar “lat euq aloh”.


let palabra = prompt('ingrese una palabra')
let reves = ''


for (let i=palabra.length; i>=0; i--){
reves  = reves + palabra.charAt(i)
}
document.write(reves)