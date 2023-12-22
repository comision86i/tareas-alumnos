// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesa
// rios para modificar y mostrar sus propiedades, calcular el perímetro y el área




class rectangulo {
    constructor(alto,ancho){
        this.alto = alto
        this.ancho = ancho
    }

    informar(){
       document.write( `el alto es ${this.alto} `)
       document.write( `el ancho es ${this.ancho}`)
    }


    perimetro( ){
        return 2 * (this.alto + this.ancho)
    }
    area(){
        return this.alto * this.ancho
    }
}
const rectangulo1 = new rectangulo (5,6)
document.write('metodo para mostrar las propiedades <br>')
rectangulo1.informar()
document.write(' <br>')


document.write('metodo para mostrar perimetro <br>')
document.write(rectangulo1.perimetro())
document.write('<br>')



document.write('metodo para mostrar el area <br>')
document.write(rectangulo1.area())

