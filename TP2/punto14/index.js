// 14- Realiza un script que pida una cadena de texto y lo 
// muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo
//  “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.


let input = prompt('ingrese frase');
let guion = ' ';
for (let i=0; i<=input.length; i++){
    guion += input [i] + '-'

}
console.log(guion)