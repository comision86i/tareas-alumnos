/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
 */
let nombre1, nombre2, nombre3;
let edad1, edad2, edad3;
nombre1 = prompt('Ingrese un nombre:')
do {
    edad1 = parseInt(prompt('Ingrese la edad:'));
} while (edad1<0 || isNaN(edad1));

nombre2 = prompt('Ingrese un nombre:')
do {
    edad2 = parseInt(prompt('Ingrese la edad:'));
} while (edad2<0 || isNaN(edad2));

nombre3 = prompt('Ingrese un nombre:')
do {
    edad3 = parseInt(prompt('Ingrese la edad:'));
} while (edad3<0 || isNaN(edad3));

mayor = Math.max(edad1,edad2,edad3);
switch (mayor) {
    case edad1:
        alert(`El mayor es ${nombre1}`)
        break;
    case edad2:
        alert(`El mayor es ${nombre3}`)
        break;
    case edad3:
        alert(`El mayor es ${nombre3}`)
        break;
}