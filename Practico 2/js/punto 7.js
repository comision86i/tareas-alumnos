// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).


let i, rep;
let numrep = prompt('Ingrese un número de repeticiones (hasta 50): ');

if (Number(numrep) == numrep) {

    if (numrep > 0 && numrep <= 50) {

        for (i = numrep; i >= 1; i--) {

            for (rep = i; rep >= 1; rep--) {
                document.write(i);
            }
            document.write("<br>");
        }
    }else {
        alert('El número ingresado no es válido');
    }
}else {
    alert('Lo introducido no es un número');
}