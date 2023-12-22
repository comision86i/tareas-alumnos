// 9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido".
//  Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente,
//   crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato",
//  y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. 


class animal {
    constructor(nombre,edad){
this._nombre = nombre
this._edad = edad
    }
    emitirSonido(){

    }
}

class perro extends animal {
    constructor (nombre,edad) {
        super(nombre,edad)
    }
    emitirSonido(){
        document.write( `El perro hace WAO <br>`)
    }


}

class gato extends animal{
    constructor (nombre,edad){
    super (nombre,edad)
    }
    emitirSonido(){
        document.write('El gato hace MIAU <br>')
    }
}

const perro1 = new perro('choby',2);
const gato1 = new gato ('garfield',5)


perro1.emitirSonido()
gato1.emitirSonido()
