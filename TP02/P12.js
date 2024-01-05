/*12- Realiza un script que genere un número aleatorio entre 1 y 99*/

let num;
do {
    num = Math.floor(Math.random()*100);
    alert(num);
} while (confirm('¿Desea seguir?'));