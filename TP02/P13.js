/*13- Realiza un script que pida un texto y lo muestre en mayúsculas.*/
let texto;
do {
    texto = prompt('Ingrese una frase:').toUpperCase();
    alert(texto);
} while (confirm('¿Desea seguir?'));