// 2- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:




// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.

class Persona {
    constructor(nombre, edad, sexo, peso, altura, year, dni) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.year = year;
        this.dni = dni || this.generarDNI();
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            alert('La persona es mayor de edad');
        } else {
            alert('La persona es menor de edad');
        }
    }

    mostrarDatos() {
        alert(`Nombre: ${this.nombre} Edad: ${this.edad} DNI: ${this.dni} Sexo: ${this.sexo} Peso: ${this.peso} Altura: ${this.altura} Año de nacimiento: ${this.year}`);
    }

    generarDNI() {
        return Math.floor(Math.random() * (99999999 - 10000000)) + 10000000;
    }

    mostrarGeneracion() {
        let generacion;
        if (this.year > 1948 && this.year <= 1949) {
            generacion = 'Conflicto bélicos';
        } else if (this.year > 1949 && this.year < 1969) {
            generacion = 'Paz y explosión demográfica';
        } else if (this.year > 1969 && this.year <= 1981) {
            generacion = 'Crisis del 73 y transición';
        } else if (this.year > 1981 && this.year <= 1994) {
            generacion = 'Inicio de la era digital';
        } else {
            generacion = 'Generación Z';
        }
        alert(`Esta persona pertenece a la generación ${generacion}`);
    }
}
let nuevaPersona;

let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');


button1.addEventListener('click',crearPersona,false);
button2.addEventListener('click',mostrarGeneracion,false);
button3.addEventListener('click',esMayorDeEdad,false)



function crearPersona() {
    const nombre = document.getElementById('nombre').value
    const edad = parseInt(document.getElementById('edad').value)
    const sexo = document.getElementById('sexo').value
    const peso = parseFloat(document.getElementById('peso').value)
    const altura = parseFloat(document.getElementById('altura').value)
    const year = parseInt(document.getElementById('year').value)

    nuevaPersona =  new Persona (nombre,edad,sexo,peso,altura,year);

    nuevaPersona.mostrarDatos();


}

function esMayorDeEdad ( ){
    nuevaPersona.esMayorDeEdad();
}

function mostrarGeneracion(){
    nuevaPersona.mostrarGeneracion();
}















