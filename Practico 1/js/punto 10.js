let num = parseInt(prompt('Ingrese un número: '))

if (num % 2 === 0) {
    alert(`El número ${num} es divisible en 2`)
} else if (num % 3 === 0) {
    alert(`El número ${num} es divisible en 3`)
}else if (num % 5 === 0) {
    alert(`El número ${num} es divisible en 5`)
}else if (num % 7 === 0) {
    alert(`El número ${num} es divisible en 7`)
} else {
    alert('El número ingresado no es divisible en 2-3-5-7.')
}