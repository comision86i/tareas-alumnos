// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.




class Producto {
    constructor (codigo,nombre,precio){
        this.codigo =codigo;
        this.nombre=nombre;
        this.precio=precio;

 
    }

imprimir(){
    document.write(`el codigo es ${this.codigo} <br>`)
    document.write(`el nombre es ${this.nombre} <br>`)    
    document.write(`el precio es ${this.precio} <br> <br>`)
}
}

const Producto1 = new Producto(1,'pizza',3.99)
const Producto2 = new Producto(2,'hamburguesa',5.99)
const Producto3 = new Producto(3,"ensalada",6.99)

productos = [Producto1,Producto2,Producto3]
// productos.forEach(function(elemento) {
// elemento.imprimir()
// });
// es lo mismo que:
for (const producto of productos) {
    producto.imprimir()
}
