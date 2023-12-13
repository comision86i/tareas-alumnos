// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
// la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.



function multiplicacion (n){
    for(let i=1; i<=10; i++){
        resultado = n * i
        document.write(`${n}x${ i} =${resultado} <br>` )
    }
}
let input = parseInt(prompt('ingrese un numero del 1 al 10'))
resultado = multiplicacion(input)

