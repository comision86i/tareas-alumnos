/*5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/
class Persona{
    constructor(nombre, edad, sexo, peso, altura, anioNac){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = this.generarDNI();
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNac = anioNac;
    }
    mostrarGeneracion(){
        switch (true) {
            case (this.anioNac >=1930 && this.anioNac <=1948):
                return (`Silent Generation
                1930 - 1948
                - Poblacion: 6.300.000
                - Circunstacia histórica: Conflictos bélicos
                - Rasgo característico: Austeridad`)
            case (this.anioNac >=1949 && this.anioNac <=1968):
                return (`Baby Boom
                1949 - 1968
                - Poblacion: 12.200.000
                - Circunstacia histórica: Paz y explosión demográfica
                - Rasgo característico: Ambición`)
            case (this.anioNac >=1969 && this.anioNac <=1980):
                return (`Generación X
                1969 - 1980
                - Poblacion: 9.300.000
                - Circunstacia histórica: Crisis del 73 y transición española
                - Rasgo característico: Obseción por el éxito`)
            case (this.anioNac >=1981 && this.anioNac <=1993):
                return (`Generacion Y (millennials)
                1981 - 1993
                - Poblacion: 7.200.000
                - Circunstacia histórica: Inicio de la digitalización
                - Rasgo característico: Frustración`)
            case (this.anioNac >=1994 && this.anioNac <=2010):
                return (`Generacion Z
                1994 - 2010
                - Poblacion: 7.800.000
                - Circunstacia histórica: Expansión masiva de internet
                - Rasgo característico: Irreverencia`)
            default:
                return (`Generacion de Cristal
                2010 - ...
                - Poblacion: contando
                - Circunstacia histórica:  - 
                - Rasgo característico: Mucha sencibilidad`)
        }
    }
    esMayorDeEdad(){
        if(this.edad >17){
            return (`Es mayor de edad`)
        }else{
            return (`Es menor de edad`)
        }
    }
    mostrarDatos(){
        return (`Nombre: ${this.nombre}
        Edad: ${this.edad}
        DNI: ${this.dni}
        Sexo: ${this.sexo}
        Peso: ${this.peso}
        Altura: ${this.altura}
        Año de nacimiento: ${this.anioNac}`)
    }
    generarDNI(){
        return Math.floor(Math.random()*90000000) + 10000000
    }
}

let Ramiro = new Persona('Ramiro', 17, 'H', 65, 1.80, 2021)
let op;
do {
    do {     
        op = prompt(`Elija una opcion:
            1 - Mostrar datos
            2 - ¿Es mayor de edad?
            3 - Datos de su Generacion`)
    } while (op!='1'&&op!='2'&&op!='3');
    switch (op) {
        case '1':
            alert(Ramiro.mostrarDatos())
            break;
        case '2':
            alert(Ramiro.esMayorDeEdad())
            break;
        case '3':
            alert(Ramiro.mostrarGeneracion())
            break;
    }
} while (confirm('¿Desea continuar?'));
