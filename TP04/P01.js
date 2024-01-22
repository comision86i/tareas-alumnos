/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.*/
//Notacion literal
// var auto ={
//     color: 'rojo',
//     marca: 'fiat',
//     modelo: 'bravo',
//     encendido: false,
//     encender: function(){
//         this.encendido = true
//         console.log('encendiendo el auto...')
//     },
//     apagar: function(){
//         this.encendido = false
//         console.log('apagando el auto...')
//     }
// }

//Funcion Constructora
function Auto(color, marca, modelo){
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
    this.encendido = this.encendido;
    this.encender = function(){
        this.encendido = true
        console.log('encendiendo el auto...')
    }
    this.apagar = function(){
        this.encendido = false
        console.log('apagando el auto...')
    }
}
var auto = new Auto('amarillo','renault','9')

console.log(auto);
console.log(`¿El auto está encendido? ${auto.encendido ? 'Sí' : 'No'}`);

auto.encender();
console.log(auto);
console.log(`¿El auto está encendido? ${auto.encendido ? 'Sí' : 'No'}`);

auto.apagar();
console.log(auto);
console.log(`¿El auto está encendido? ${auto.encendido ? 'Sí' : 'No'}`);
