let numero1, numero2, numero3;

numero1 = parseInt(prompt('Ingrese el primer número: '))
numero2 = parseInt(prompt('Ingrese el segundo número: '))
numero3 = parseInt(prompt('Ingrese el tercer número: '))

if (numero1 > numero2 && numero1 > numero3) {
    alert(`El número ${numero1} es mayor`)

} else if (numero2 > numero1 && numero2 > numero3) {
    alert(`El número ${numero2} es mayor`)

} else if (numero3 > numero1 && numero3 > numero2) {
    alert(`El número ${numero3} es mayor`)

} else {
    alert('Los caracteres ingresados son iguales o invalidos.')
}