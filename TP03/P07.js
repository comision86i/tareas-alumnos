/*7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.*/
let numero
do {
    numero = parseInt(prompt('Ingrese un número para obtener sus multiplos'))
} while (isNaN(numero));

let multiplos = TablaDeMultiplicar(numero);

document.write(`<table class="table text-center m-auto w-25">
                    <thead>
                        <tr>
                            <th>X</th>
                            <th>${numero}</th>
                        </tr>
                    </thead>
                    <tbody>`);
for (let i = 0; i < multiplos.length; i++) {
    document.write(`<tr>
                        <td>${i+1}</td>
                        <td>${multiplos[i]}</td>
                    </tr>`);
}
document.write('</tbody></table>')
function TablaDeMultiplicar(x){
    let multiplos = []
    for (let i = 0; i < 10; i++) {
        multiplos[i] = x*(i+1)   
    }
    return multiplos;
}