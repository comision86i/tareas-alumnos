// 8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse".
//  Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".

class persona {
    constructor(nombre,edad,profesion){
this._nombre = nombre
this._edad = edad
this._profesion = profesion
    }

    saludar(){
        document.write( `Hola ${this._nombre} <br>`)
    }


    despedirse (){
        document.write( `Hasta luego ${this._nombre}<br>`)
    }
}

const persona1 = new persona ('Nico',24,'abogado ');
const persona2 = new persona ('Julio',35,'programador')


persona1.saludar()
persona1.despedirse()
persona2.saludar()
persona2.despedirse()

