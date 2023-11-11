let primerNumero = prompt("Ingresa el primer número:");
let segundoNumero = prompt("Ingresa el segundo número:");

 let numero1 = parseFloat (primerNumero);
let numero2 = parseFloat(segundoNumero);
 
if (numero1 > numero2) {
    alert("> " + numero1);
} else if (numero2 > numero1) {
    alert("> " + numero2);
} else {
    alert("Ambos números son iguales.");
}

 