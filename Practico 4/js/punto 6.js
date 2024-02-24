// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.


class Libro {
    constructor(ISBN, Titulo, Autor, NumPaginas) {
        this.ISBN = ISBN
        this.Titulo = Titulo
        this.Autor = Autor
        this.NumPaginas = NumPaginas
    }

    getISBN() {
        return this.ISBN
    }

    getTitulo() {
        return this.Titulo
    }

    getAutor() {
        return this.Autor
    }

    getNumPaginas() {
        return this.NumPaginas
    }

    setISBN(ISBN) {
        this.ISBN = ISBN
    }

    setTitulo(Titulo) {
        this.Titulo = Titulo
    }

    setAutor(Autor) {
        this.Autor = Autor
    }

    setNumPaginas(NumPaginas) {
        this.NumPaginas = NumPaginas
    }

    mostrarLibro() {
        console.log(`El libro ${this.Titulo} con ISBN ${this.ISBN} creado por el autor ${this.Autor} tiene ${this.NumPaginas} páginas.`);
    }

    maxPages() {
        if (libro1.getNumPaginas() > libro2.getNumPaginas() && libro1.getNumPaginas() > libro3.getNumPaginas()) {
            console.log(`El libro ${libro1.getTitulo()} tiene mas páginas.`)

        } else if (libro2.getNumPaginas() > libro1.getNumPaginas() && libro2.getNumPaginas() > libro3.getNumPaginas()) {
            console.log(`El libro ${libro2.getTitulo()} tiene mas páginas.`)

        }
        else if (libro3.getNumPaginas() > libro1.getNumPaginas() && libro3.getNumPaginas() > libro2.getNumPaginas()) {
            console.log(`El libro ${libro3.getTitulo()} tiene mas páginas.`)

        } else {
            console.log('Los 3 libros tienen la misma cantidad de páginas.')
        }
    }
}

let libro1 = new Libro (9780545069670, 'Harry Potter y la piedra filosofal', 'J. K. Rowling', 320);
let libro2 = new Libro (9781496171573, 'Don Quijote de la Mancha', 'Miguel de Cervantes', 462);
let libro3 = new Libro (9788854172388, 'El Principito', 'Antoine de Saint-Exupéry', 124);


// libro1.mostrarLibro();
// libro2.mostrarLibro();