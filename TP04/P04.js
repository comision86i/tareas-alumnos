/*4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados*/
class Producto{
    constructor(codigo,nombre,precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    ImprimeDatos(){
        return (`<p><b>Codigo: </b>${this.codigo}<br><b>Nombre: </b>${this.nombre}<br><b>Precio: </b>$ ${this.precio}</p><hr>`)
    }
}
let productos = [new Producto(1,'Leche',980), new Producto(2,'Pan',1000), new Producto(3,'Coca Cola',1200)];
document.write('<h1>Productos</h1>')
for (let i = 0; i < productos.length; i++) {
    document.write(productos[i].ImprimeDatos());
}