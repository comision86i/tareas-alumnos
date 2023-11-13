// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
// Ejemplo: 

// input: 20
// input: 210




// Output: El 20 es divisible por 2 y por 5.
// Output: El 210 es divisible por 2, por 3, por 5 y por 7.



let numero = parseFloat(prompt('ingrese un numero'));
let divisible = []

if (numero % 2 === 0){
divisible.push(2)
}
if (numero % 3===0)[
    divisible.push(3)
]
if (numero % 5===0){
    divisible.push(5)
}
if (numero % 7 ===0){
    divisible.push(7)
}
if (divisible.length === 0){
document.write(`${numero} NOOOOO es divisible por los siguientes numeros 2,3,5,7`)
}
else {
    document.write(`${numero} es divisible por los siguientes numeros ${divisible}`)
}