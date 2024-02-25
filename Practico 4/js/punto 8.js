// 8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".

class Persona {
    constructor(nombre, edad, profesion){
        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion
    }

    getNombre(){
        return this.nombre
    }

    getEdad(){
        return this.edad
    }

    getProfesion(){
        return this.profesion
    }

    setNombre(nombre){
        this.nombre = nombre
    }

    setEdad(edad){
        this.edad = edad
    }

    setProfesion(profesion){
        this.profesion = profesion
    }

    saludar(){
        alert(`Hola, soy ${this.nombre}, tengo ${this.edad} años, y trabajo de ${this.profesion}`);
    }

    despedirse(){
        alert(`Hasta luego! 🙋🏻‍♂️`);
    }
}

let persona1 = new Persona ('Julio', 54, 'Programador y Mentor');
let persona2 = new Persona ('Lionel Messi', 36, 'Jugador de Futbol');
let persona3 = new Persona ('Harry Potter', 43, 'Mago y Hechicero');
