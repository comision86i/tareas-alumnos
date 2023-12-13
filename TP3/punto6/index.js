// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
// luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

let rectangulo = function (altura,lados){
    return (altura * 2 + lados * 2) 
    
    }
    let altura = parseInt(prompt('ingrese la altura'))
    let lados = parseInt(prompt('ingrese los lados'))
    let resultado = rectangulo(altura,lados)
    document.write(resultado)
    
    