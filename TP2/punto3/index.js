// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un 
; // Crear un arreglo para almacenar las cadenas


let resultado = ''
do {
    let palabra = prompt('ingrese una palabra');
    if (resultado == '')
    resultado = palabra;
else {
    resutaldo = resultado + '' + palabra;
}
}while (confirm('desea seguir?'))
document.write(resultado);


// let text;
// if (confirm("Press a button!") == true) {
//   text = "You pressed OK!";
// } else {
//   text = "You canceled!";
// }
// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp






// let resultado = ''

// do { 
//     let palabra  = prompt('ingrese una palabra');
//     if(resultado == ''){
//         resultado = palabra
//     }
//     else{
//         resultado = resultado + '---' + palabra
//     }
    
// } while (confirm('Quiere seguir'));
// document.write(resultado)