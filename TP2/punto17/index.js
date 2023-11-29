// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let palabra = prompt('introduce una palabra')
palabra = palabra.toLocaleUpperCase()
let vocal = ''

for (let i=0; i<=palabra.length; i++){
    let vocal = palabra.charAt(i)
    if ( vocal === 'A'){
        document.write('la primera vocal es ' + vocal)
        break;
    } 
    else if (vocal === 'E'){
        document.write('la primera vocal es ' + vocal)
        break;
    }
    else if (vocal === 'I'){
        document.write('la primera vocal es ' + vocal)
        break;
    }
    else if( vocal === 'O'){
        document.write('la primera vocal es ' + vocal)
        break;
    }
    else if( vocal === 'U'){
        document.write('la primera vocal es ' + vocal)
        break;
    }
    else {
        console.log('no se encontraron vocales')
    }
}
