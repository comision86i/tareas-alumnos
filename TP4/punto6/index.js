// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.


class libro {
    constructor(titulo,isbn,autor,numeroPaginas){
this._titulo=titulo
this._isbn = isbn
this._autor=autor
this._numeroPaginas=numeroPaginas
    }

    numeroPaginas(){
if(book1.numeroPaginas > book2.numeroPaginas){
document.write(`el libro 1 tiene mas paginas`)
}
else {
    document.write(`el libro 2 tiene mas paginas`)
}
    }

get (){
    return this._titulo
}
set (NewTitulo){
this._titulo = NewTitulo
}



get (){
    return this._isbn
}
set (NewIsb){
    this._isbn = NewIsb
}


get (){
    return this._autor
}
set (NewAutor){
    this._autor = NewAutor
}


get ( ){
    return this._numeroPaginas
}
set (NewNumeroPaginas){
    this._numeroPaginas = NewNumeroPaginas
}

    mostrarLibro(){
        document.write(`El libro ${this._titulo} con  ISBN ${this._isbn} creado por el autor ${this._autor} tiene la cantidad de paginas de ${this._numeroPaginas} <br>`)
    }


}

const book1 = new libro ('1884',2738,'Nicolas',97)
const book2 = new libro ('Narnia',839,'Lewis',100)




book1.mostrarLibro()
book2.mostrarLibro()


book1,book2.numeroPaginas()
