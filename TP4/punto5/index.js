// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.





class persona {
    constructor(nombre,edad,sexo,peso,altura,year,dni){
        this.nombre=nombre;
        this.edad=edad;
        this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;
        this.year=year;
        this.dni=this.generarDNi()
    }

mayorEdad (){
    if(this.edad > 18){
     document.write(' es mayor de edad <br>')
    }
    else if (this.edad <18){
      document.write('es menor de edad <br> ')
    }

}

mostrarDatos()
{
  document.write( `su nombre es ${this.nombre} <br> su edad es ${this.edad} <br> su dni es ${this.dni}  <br> su sexo es ${this.sexo} <br> su peso es ${this.peso} <br>su altura es ${this.altura} <br>
    su fecha de nacimiento es ${this.year} <br>`)
}

generarDNi(){
    return Math.floor(Math.random()* (99999999 - 10000000)) + 10000000;
}

mostrarGeneracion(){
    let  generacion;
    if ( this.year> 1948 && this.year <=1949){
generacion = ' conflictos belicos <br>'
    }
    else if (this.year> 1949 &&  this.year<1969){
generacion = '  paz y explosion demografica'
    }
    else if (this.year >1969 && this.year<=1981){
generacion ='  crisis del 73 y trasicion'
    }
    else if (this.year > 1981 && this.year<=1994 ){
        generacion =' inicio de la digital'
    }
    else  {
    generacion = ' generacion z '
    }
    document.write(`esta persona perternece a la generacion  ${generacion} <br>`)
}
}

const persona1 = new persona('Nicolas',24,'h',67,1.75,1949,'<br>')
persona1.mayorEdad()
persona1.mostrarDatos()
persona1.generarDNi()
persona1.mostrarGeneracion()
