// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

let edad1, edad2, edad3;

age1 = parseInt(prompt('Ingrese la primera edad: '))
age2 = parseInt(prompt('Ingrese la segunda edad: '))
age3 = parseInt(prompt('Ingrese la tercera edad: '))

// if (age1 > age2 && age1 > age3) {
//     alert(`${age1} es mayor`)

// } else if (age2 > age1 && age2 > age3) {
//     alert(`${age2} es mayor`)

// } else if (age3 > age1 && age3 > age2) {
//     alert(`${age3} es mayor`)

// } else {
//     alert('Valor ingresado incorrecto')
// }


alert(`${Math.max(age1, age2, age3)} es mayor`);

