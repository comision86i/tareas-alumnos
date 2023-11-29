// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456



let numero = parseInt(prompt('ingrese un numero no mayor a 50'));

for (let i =numero; i<=50; i++){
    console.log(i.toString().repeat(i))
}

// otra forma de hacerlo 

// let numero = parseInt(prompt('ingrese un numero no mayor a 50'));
// let rep = "";
// if (!isNaN(numero)){
//     if (numero >=1 && numero <=50){
//         for (let i=0; i<=numero;  i++){
//             rep+=(i);
//             console.log(rep)

//         }
//     }
// }



