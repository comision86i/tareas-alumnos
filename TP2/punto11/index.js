// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp


let primerNombre = prompt('ingrese primer nombre')
let primerEdad =  parseInt(prompt('ingrese primera edad'))

let segundoNombre = prompt('ingrese segundo nombre')
let segundoEdad =  parseInt(prompt('ingrese segunda edad'))


let tercerNombre = prompt('ingrese tercer nombre')
let tercerEdad =  parseInt(prompt('ingrese tercer edad'))


let maximo = Math.max(primerEdad,segundoEdad,tercerEdad)
if (maximo === primerEdad){
    console.log(`el mayor es ${primerNombre}`)
}
else if (maximo === segundoEdad){
    console.log(`el mayor es ${segundoNombre}`)
}
else if (maximo === tercerEdad){
    console.log(`el mayor es ${tercerNombre}`)
}
else{
    console.log('ingrese valor valido')
}