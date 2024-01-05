//15- Realiza un script que cuente el número de vocales que tiene un texto.

let frase = prompt('Ingrese una frase:');
let vocales = 0;

for (let i = 0; i < frase.length; i++) {
    if(('aeiouAEIOU').includes(frase[i])){
        vocales++;
    }
}
alert(`Las vocales en ${frase} son ${vocales}`);