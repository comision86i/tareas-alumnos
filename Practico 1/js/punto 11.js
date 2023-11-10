let numero = parseInt(prompt('Ingrese un número: '))

if (numero % 2 === 0 && numero % 3 === 0 && numero % 5 === 0 && numero % 7 === 0) {
    alert(`El número ${numero} es divisible en 2, 3, 5 y 7`)

} else if (numero % 2 === 0 && numero % 3 === 0 && numero % 5 === 0) {
        alert(`El número ${numero} es divisible en 2, 3 y 5`)

} else if (numero % 2 === 0 && numero % 3 === 0 && numero % 7 === 0) {
    alert(`El número ${numero} es divisible en 2, 3 y 7`)

} else if (numero % 2 === 0 && numero % 5 === 0 && numero % 7 === 0) {
    alert(`El número ${numero} es divisible en 2, 5 y 7`)

} else if (numero % 3 === 0 && numero % 5 === 0 && numero % 7 === 0) {
    alert(`El número ${numero} es divisible en 3, 5 y 7`)

} else if (numero % 2 === 0 && numero % 5 === 0) {
    alert(`El número ${numero} es divisible en 2 y en 5`)

} else if (numero % 2 === 0 && numero % 7 === 0) {
    alert(`El número ${numero} es divisible en 2 y en 7`)

} else if (numero % 3 === 0 && numero % 5 === 0) {
    alert(`El número ${numero} es divisible en 3 y en 5`)

} else if (numero % 3 === 0 && numero % 7 === 0) {
    alert(`El número ${numero} es divisible en 3 y en 7`)

} else if (numero % 5 === 0 && numero % 7 === 0) {
    alert(`El número ${numero} es divisible en 5 y en 7`)

} else if (numero % 2 === 0 && numero % 3 === 0) {
    alert(`El número ${numero} es divisible en 2 y en 3`)

} else if (numero % 2 === 0) {
    alert(`El número ${numero} es divisible en 2`)

} else if (numero % 3 === 0) {
    alert(`El número ${numero} es divisible en 3`)

} else if (numero % 5 === 0) {
    alert(`El número ${numero} es divisible en 5`)

} else if (numero % 7 === 0) {
    alert(`El número ${numero} es divisible en 7`)

} else {
    alert('El número ingresado no es divisible en 2-3-5-7.')
}