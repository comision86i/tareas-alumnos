window.alert("Un Mensaje");

let texto = "Hello World"
console.log(texto)

let suma = 3 + 5
console.log(suma)


let nombre, nota;

nombre = prompt('Ingrese el nombre del alumno');
nota = parseInt(prompt('Ingrese la nota del alumno'));

if (nota >= 4) {

    alert(`${nombre} está aprobado con un ${nota}`)

} else {

    alert(`${nombre} está desaprobado`)
}





// let estacion = prompt("¿Cuál es tu estación del año preferida?");

// switch (estacion) {
    // case "primavera":
        // si la variable estacion contiene la cadena de texto "primavera" se ejecutará este bloque de codigo
        // console.log('la primavera');
        // break;
    // case "verano":
        // si la variable estacion contiene la cadena de texto "verano" se ejecutará este bloque de código
        // console.log('el verano');
        // break;
    // case "otoño":
        // console.log('el otoño');
        // break;
    // case "invierno":
        // console.log('el invierno');
        // break;
    // default:
        // si la variable estacion no contiene ningún nombre válido se ejecutará este bloque de código
        // console.log('no es una estación del año');
// }