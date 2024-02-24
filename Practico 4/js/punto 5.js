// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.


class Persona {
    constructor(nombre, edad, sexo, peso, altura, nacimiento) {
        this.nombre = nombre
        this.edad = edad
        this.sexo = sexo
        this.peso = peso
        this.altura = altura
        this.nacimiento = nacimiento
    }

    getNombre() {
        return this.nombre;
    }

    getEdad() {
        return this.edad;
    }

    getSexo() {
        return this.sexo;
    }

    getPeso() {
        return this.peso;
    }

    getAltura() {
        return this.altura;
    }

    getNacimiento() {
        return this.nacimiento;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    setEdad(edad) {
        this.edad = edad;
    }

    setSexo(sexo) {
        this.sexo = sexo;
    }

    setPeso(peso) {
        this.peso = peso;
    }

    setAltura(altura) {
        this.altura = altura;
    }

    setNacimiento(nacimiento) {
        this.nacimiento = nacimiento;
    }

    mostrarGeneracion() {
        let generacion;

        if (this.nacimiento >= 1930 && this.nacimiento <= 1948) {
            generacion = 'Pertenece a la Silent Generation, caracterizada por los niños de la posguerra, debido a conflíctos bélicos.';

        } else if (this.nacimiento >= 1949 && this.nacimiento <= 1968) {
            generacion = 'Pertenece a la generación Baby Boom, caracterizada por la ambición y la explición demográfica.';

        } else if (this.nacimiento >= 1969 && this.nacimiento <= 1980) {
            generacion = 'Pertenece a la generación X, personas obsesionadas por el éxito, caracterizada por la independencia y la innovación tecnológica.';

        } else if (this.nacimiento >= 1981 && this.nacimiento <= 1993) {
            generacion = 'Pertenece a los millennials, caracterizados por la diversidad y la tecnología omnipresente.';
            
        } else if (this.nacimiento >= 1994 && this.nacimiento <= 2010) {
            generacion = 'Pertenece a la generación Z, caracterizada por la inclusión y la conectividad.';

        } else {
            generacion = 'Generación no reconocida.';
        }
        console.log(generacion);
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            console.log('La persona es mayor de edad');
        } else {
            console.log('La persona no es mayor de edad');
        }
    }

    mostrarDatos() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Sexo: ${this.sexo}`);
        console.log(`Peso: ${this.peso}kg`);
        console.log(`Altura: ${this.altura}`);
        console.log(`Año de Nacimiento: ${this.nacimiento}`);
    }

    generaDNI() {
        let numeroAleatorio = Math.floor(Math.random() * 90000000) + 10000000;
        return String(numeroAleatorio).padStart(8, '0');
    }
    
    
}

let persona1 = new Persona ('Julio', 54, 'H', 80, 1.75, 1970);
let persona2 = new Persona ('Estefania', 26, 'F', 65, 1.70, 1997);
let persona3 = new Persona ('Ignacio', 18, 'H', 68, 1.73, 2005);
let persona4 = new Persona ('Lionel Messi', 36, 'H', 72, 1.70, 1987);
let persona5 = new Persona ('Julian Alvarez', 24, 'H', 71, 1.70, 2000);