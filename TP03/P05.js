/*5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/

do {
   let cadena = prompt("Ingrese una frase:")
   alert(AnalizarCadena(cadena));
} while (confirm('¿Desea continuar?'));

function AnalizarCadena(cadena){
    if(cadena === cadena.toUpperCase()){
        return(`La cadena :"${cadena}", está formada por solo mayúsculas`);
    }else if(cadena === cadena.toLowerCase()){
        return(`La cadena :"${cadena}", está formada por solo minúsculas`);
    }else{
        return(`La cadena :"${cadena}", está formada por mayúsculas y minúsculas`);
    }
}