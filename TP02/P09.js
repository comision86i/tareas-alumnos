/*9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal.*/
let cadena;
for (let i = 1; i <=500; i++) {
    cadena = '- ';
    cadena = cadena + i;
    if(i%4==0){
        cadena = cadena + ' (Múltiplo de 4)';
    }
    if(i%9==0){
        cadena = cadena + ' (Múltiplo de 9)'
    }
    document.write(`${cadena} <br>`);
    if(i==5){
        document.write('____________________________________________________<br>');
    }
}