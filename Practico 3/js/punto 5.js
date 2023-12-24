// 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function infoTexto(cadena){
    
    if (cadena === cadena.toUpperCase()){
        return `El texto ${cadena} está en Mayúsculas`

    } else if (cadena === cadena.toLowerCase()){
        return `El texto ${cadena} está en Minúsculas`

    } else {
        return `El texto ${cadena} tiene Mayúsculas y Minúsculas`
    }
}

let texto = prompt('Ingrese una cadena de texto: ')
let cadenaTexto = infoTexto(texto)
alert(cadenaTexto)