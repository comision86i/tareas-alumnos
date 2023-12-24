// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function parImpar(int) {

    if (int % 2 === 0){
        alert(`El número ${int} es par`)

    } else {
        alert(`El número ${int} es impar`)
    }
}

let number = parseInt(prompt('Ingrese un número: '))

parImpar(number)