/* 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:



input: Hola mundo
Output: oauo
 */

let palabra = prompt("Ingrese una Frase");

for (let i = 0; i < palabra.length; i++) {
  const caracter = palabra.charAt(i);
}

switch (caracter) {
  case "a":
    document.write(palabra.substring(i, i + 1));
    break;
  case "e":
    document.write(palabra.substring(i, i + 1));
    break;
  case "i":
    document.write(palabra.substring(i, i + 1));
    break;
  case "o":
    document.write(palabra.substring(i, i + 1));
    break;
  case "u":
    document.write(palabra.substring(i, i + 1));
    break;

  default:
    console.log("No son vocales");
    break;
}
