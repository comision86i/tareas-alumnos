/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
*/
let edad = parseInt(prompt("Ingrese la edad: "));
while (edad<0 || isNaN(edad)){
    alert('El numero ingresado no es valido');
    edad = parseInt(prompt("Ingrese la edad (Con numeros mayor a 0): "));
}
if(edad>18){
    alert('Ya puede conducir');
}else{
    alert('No tiene la edad para conducir');
}