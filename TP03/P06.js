/*6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
La fórmula del perímetro  es p = 2*(a +b)*/
do {
    alert('Ingrese los lados de un rectángulo');
    let a
    do {
        a = parseInt(prompt('Valor del lado A:'));
    } while (isNaN(a));
    let b
    do {
        b = parseInt(prompt('Valor del lado B:'));
    } while (isNaN(b));
    alert(PerimetroRectangulo(a,b));
} while (confirm('¿Desea continuar?'));

function PerimetroRectangulo (a, b){
    let p = (a+b)*2;
    return(`El perímetro del rectángulo es: ${p}`);
}