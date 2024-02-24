// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    getCodigo() {
        return this.codigo;
    }

    getNombre() {
        return this.nombre;
    }

    getPrecio() {
        return this.precio;
    }

    setCodigo(codigo) {
        this.codigo = codigo;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    setPrecio(precio) {
        this.precio = precio;
    }

    imprimeDatos() {
        console.log(`Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}`);
    }
}


let producto1 = new Producto(1, 'Naranja', 175);
let producto2 = new Producto(2, 'Banana', 350);
let producto3 = new Producto(3, 'Manzana', 200);

let productos = [producto1, producto2, producto3];

productos.forEach(producto => producto.imprimeDatos());