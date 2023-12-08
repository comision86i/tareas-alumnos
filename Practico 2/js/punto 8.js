// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

let i, rep;
let number = parseInt(prompt('Ingrese un número para crear una piramide (No mayor de 50):'))

if (number > 0 && number <= 50) {

    for (i = 0; i <= number; i++) {

        for (rep = 1; rep <= i; rep++) {
            document.write(rep);
        }
        document.write('<br>');
    }
} else {
    alert('El número ingresado no es válido');
}