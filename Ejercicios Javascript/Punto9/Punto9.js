let frase = prompt("Ingrese una frase:");
let vocales = "";

for (let i = 0; i < frase.length; i++) {
    let letra = frase.charAt(i);
    if ("aeiou".indexOf(letra) !== -1) {
        vocales += letra;
    }
}

document.write("Las vocales de la frase son: " + vocales);
