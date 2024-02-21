let input = document.getElementById('input');
let botonAgregar = document.getElementById('botonAgregar');
let ul = document.getElementById('elementoContenido')



botonAgregar.addEventListener('click',agregar);



function agregar(e){
    e.preventDefault();
    let text = input.value


    if(text !== ""){
        let li = document.createElement('li')
        let p = document.createElement('p')
        p.textContent=text 
        li.appendChild(p)
        li.appendChild(botonBorrar())
        ul.appendChild(li)
        input.value = '';
    }

}

function botonBorrar() {
    let botonBorrar = document.createElement('button')
    botonBorrar.textContent = 'X'
    botonBorrar.classList.add('botonBorrar');

    botonBorrar.addEventListener('click',(e)=>{
        // quiero que elimine el elemento del item no el boton por eso usamnos e.targetparenteElement
        const item = e.target.parentElement;
        ul.removeChild(item)
    })
    return botonBorrar;
}

// let textoInsertado = document.createTextNode(`        contenido agregado`)
// let div = document.getElementById('UnDiv')
// div.appendChild(textoInsertado)

// let parrafo3 = document.createElement('p')
// let div = document.getElementById('UnDiv')
// let parrafo2 = document.getElementById('parrafo2')
// div.insertBefore(parrafo3,parrafo2)
// let parrafotexto3 = document.createTextNode('hola')

// parrafo3.appendChild(parrafotexto3)