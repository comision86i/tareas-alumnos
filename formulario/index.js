class registro {
    constructor(nombre,password){
        this.nombre = nombre
        this.password = password
    }
}

let botonEnviar = document.getElementById('enviar')
botonEnviar.addEventListener('click',enviar)


let personas;
let mensajeError = []
function enviar (evento){
    evento.preventDefault();
    let error = document.getElementById('error')
    error.style.color='red'
    let nombre =document.getElementById('nombre').value 
    if (nombre.value ===  null  || nombre.value === '') {
        mensajeError.push('ingrese un nombre valido')
    }
    let password= document.getElementById('password').value
    if (password.value === null || password.value === ''){
        mensajeError.push('ingrese password valido')
    }
    error.textContent = mensajeError.join(', ')

    personas = new registro (nombre,password)

localStorage.setItem('llave',JSON.stringify(personas))
let llave = JSON.parse(localStorage.getItem(personas))
}