// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad = parseInt(prompt('Ingrese su edad: '))

if (edad >= 18) {
    alert('Ya puede conducir')

} else if (edad < 18) {
    alert('Aun no tiene la edad requerida para conducir')

} else {
    alert('Los valores ingresados son incorrectos')
}