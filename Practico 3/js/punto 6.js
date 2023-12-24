// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
// La fórmula del perímetro  es p = 2*(a + b)

let valor1 = parseFloat(prompt('Ingrese un lado del rectangulo: '))
let valor2 = parseFloat(prompt('Ingrese el otro lado del rectangulo: '))

function rectangulo(lado1, lado2){
    let perimetro = 2 * (lado1 + lado2)
    return `El perímetro del rectángulo es ${perimetro}`
}

let ladosRectangulo = rectangulo(valor1, valor2);
alert(ladosRectangulo);