// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
let frase = prompt('Ingrese una frase:');
let longitud = frase.length;
let vocales = "";
for(let i=0;i<longitud;i++){
    let caracter = frase.charAt(i);
    switch (caracter) {
        case 'a':
        case 'A':
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
        case 'U':
            vocales += (caracter);
            break;
        default:
            break;
    }
}
document.write(`<h1>Las vocales de ${frase} son: ${vocales}</h1>`);

// let frase = prompt("Ingrese una frase:");
// let vocales = "";
// let longitudFrase = frase.length;
// for (let i = 0; i < longitudFrase; i++) {
//     let caracter = frase.charAt(i);
//     if ("aeiouAEIOU".indexOf(caracter) !== -1) {
//         vocales += caracter;
//     }
// }
// document.write(`<h1>Las vocales de ${frase} son: ${vocales}</h1>`);