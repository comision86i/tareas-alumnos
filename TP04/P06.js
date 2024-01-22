/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.*/

class Libro{
    constructor(){
        this.ISBN = 0;
        this.titulo = 'Sin titulo';
        this.autor = 'Sin autor';
        this.paginas = 0;
    }
    setISBN(ISBN){
        this.ISBN = ISBN;
    }
    getISBN(){
        return(this.ISBN);
    }
    setTitulo(titulo){
        this.titulo = titulo;
    }
    getTitulo(){
        return(this.titulo);
    }
    setAutor(autor){
        this.autor = autor;
    }
    getAutor(){
        return(this.autor);
    }
    setPaginas(paginas){
        this.paginas = paginas;
    }
    getPaginas(){
        return(this.paginas);
    }
    mostrarLibro(){
        return (`El libro "${this.titulo}" con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene páginas ${this.paginas}`)
    }
}

let libro1 = new Libro()
let libro2 = new Libro()

libro1.setISBN('A1');
libro1.setAutor('Pepe');
libro1.setPaginas(203);
libro1.setTitulo('La historia de Pepe');

libro2.setISBN('B2');
libro2.setAutor('Carlos');
libro2.setPaginas(590);
libro2.setTitulo('Carlos el travieso');

document.write(libro1.mostrarLibro());
document.write('<br>')
document.write(libro2.mostrarLibro());
document.write('<br>')
switch (true) {
    case libro1.getPaginas()<libro2.getPaginas():
        document.write(`El libro "${libro2.getTitulo()}" tiene más páginas que el libro "${libro1.getTitulo()}"`)
        break;
    case libro2.getPaginas()<libro1.getPaginas():
        document.write(`El libro "${libro1.getTitulo()}" tiene más páginas que el libro "${libro1.getTitulo()}"`)
        break;
    default:
        document.write(`Los libros "${libro1.getTitulo()}" y "${libro1.getTitulo()} tienen las mismas páginas"`)
        break;
}
