// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }

    getAlto() {
        return this.alto;
    }

    getAncho() {
        return this.ancho;
    }

    setAlto(alto) {
        this.alto = alto;
    }

    setAncho(ancho) {
        this.ancho = ancho;
    }

    mostrarRectangulo() {
        console.log(`Rectángulo con alto ${this.alto} y ancho ${this.ancho}`);
    }

    calcularPerimetro() {
        return 2 * (this.alto + this.ancho);
    }

    calcularArea() {
        return this.alto * this.ancho;
    }
}

let rectangulo1 = new Rectangulo(5, 10);
rectangulo1.mostrarRectangulo();
console.log(`Perímetro: ${rectangulo1.calcularPerimetro()}`);
console.log(`Área: ${rectangulo1.calcularArea()}`);


let rectangulo2 = new Rectangulo(6, 13);
rectangulo2.mostrarRectangulo();
console.log(`Perímetro: ${rectangulo2.calcularPerimetro()}`);
console.log(`Área: ${rectangulo2.calcularArea()}`);