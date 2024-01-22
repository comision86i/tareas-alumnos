/*3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área*/
function Rectangulo(alto, ancho){
    this.alto = alto;
    this.ancho = ancho;
    this.modificarAlto = function(alto){
        this.alto = alto
    };
    this.modificarAncho = function(ancho){
        this.ancho = ancho;
    };
    this.mostrarInfo = function(){
        return (`Rectangulo
            Alto: ${this.alto}
            Ancho: ${this.ancho}
            Perimetro: ${this.perimetro()}
            Aréa: ${this.area()}`);
    };
    this.perimetro = function(){
        return ((this.alto+this.ancho)*2);
    };
    this.area = function(){
        return (this.ancho*this.alto);
    };
}
let alto,ancho,op;
do {
    alto = parseInt(prompt('Ingrese el alto del rectángulo:'))
} while (isNaN(alto));
do {
    ancho = parseInt(prompt('Ingrese el ancho del rectángulo:'))
} while (isNaN(ancho));
let rectangulo = new Rectangulo(alto,ancho);
do {
    do {
        op = prompt(`Seleccione una opcion:\n
                        1 - Datos del rectágulo
                        2 - Modificar el alto
                        3 - Modificar el ancho`);
    } while (op!='1' && op!='2' && op!='3');
    switch (op) {
        case '1':
            alert(rectangulo.mostrarInfo())
            break;
        case '2':
            do {
                alto = parseInt(prompt('Ingrese el alto del rectángulo:'))
            } while (isNaN(alto));
            rectangulo.modificarAlto(alto);
            alert('Modificando alto...')
            break;
        case '3':
            do {
                ancho = parseInt(prompt('Ingrese el ancho del rectángulo:'))
            } while (isNaN(ancho));
            rectangulo.modificarAncho(ancho);
            alert('Modificando Ancho...')
            break;
    }
} while (confirm('¿Desea continuar?'));