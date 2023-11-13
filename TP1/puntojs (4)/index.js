// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
// Ejemplo:



// input: Hola mundo
// Output: oauo

let frase = prompt('ingrese una frase');
let vocales = [];

frase = frase.toLowerCase();

for ( let i = 0; i < frase.length; i++){
    let caracter = frase.charAt(i);
    if ( caracter === 'a' || caracter === 'e'  || caracter === 'i' || caracter === 'o' || caracter === 'u'){
        vocales.push(caracter);
    }
}
let resultados = vocales.join(',');
document.write('las vocales son las siguientes  ' + resultados);


