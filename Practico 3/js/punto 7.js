// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

function tablaMultiplicar(){
    let valor = parseInt(prompt('Ingrese un número para realizar su tabla de multiplicar: '))

    for (let i = 0; i <= 10; i++){
        let tabla = valor * i;
        document.write(`${i} * ${valor} = ${tabla}`)
        document.write('<br>')
    }
}

tablaMultiplicar();

