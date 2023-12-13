// 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
// A partir de la cadena que se le pasa, la función determina si esa cadena está 
// formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.



let  informacion = (cadena) =>{
    if(cadena ===cadena.toUpperCase()){
    return'esta formada por mayusculas'}

    else if(cadena===cadena.toLowerCase()){
        return'esta formada por minusculas'
    }
    else {
        return'esta formada por una mescla de ambas'
    }
}

console.log(informacion('HOLA'))
console.log(informacion('hola'))
console.log(informacion('Hola'))

// AQUI SI LO QUIERE PONER DESDE UN PROMT EL USER Y NO CON PARAMETROS QUE LE ASIGNAMOS ATRAVEZ DE LA CONSOLA
// AQUI SI LO QUIERE PONER DESDE UN PROMT EL USER Y NO CON PARAMETROS QUE LE ASIGNAMOS ATRAVEZ DE LA CONSOLA
// AQUI SI LO QUIERE PONER DESDE UN PROMT EL USER Y NO CON PARAMETROS QUE LE ASIGNAMOS ATRAVEZ DE LA CONSOLA

let Input = prompt('ingrese un texto ')
let resultado = informacion(Input)
console.log(resultado)