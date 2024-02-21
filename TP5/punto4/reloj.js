// setInterval(() => {
// let fecha = document.getElementById('fecha')
// let estado = document.getElementById('estado')
// let tiempo = document.getElementById('tiempo')

// let datos = new Date();
// let semana = ['domingo','lunes','martes','miercoles','jueves','viernes','sabados']
// let meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
// let newDay;
// let state;
// if (datos.getDate() < 10){
//     newDay= '0' + datos.getDate()
// }
// else {
//    newDay= datos.getDate()
// }

// if ( datos.getHours() >= 12 ){
//     state = 'PM'
// }
// else {
//     state = 'AM'
// }


// fecha.textContent =  `${semana[datos.getDay()] + "  "  + datos.getDay()  +  " "  +   meses[datos.getMonth()]  +  "  " + datos.getFullYear()   }  ` 
// estado.textContent =  `${state}  ` ;
// tiempo.textContent = `${datos.toLocaleTimeString()}` 

// }, 1000);


setInterval(() => {
    let fecha = document.getElementById('fecha')
    let estado = document.getElementById('estado')
    let tiempo = document.getElementById('tiempo')

let datos = new Date()
let semana = ['domingo','lunes','martes','miercoles','jueves','viernes','sabados']
let meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
let newDay;
let state;

if (datos.getDate() < 10){
    newDay = '0' + datos.getDate()
}
else {
    newDay = datos.getDate()
}

if (datos.getHours >=12){
    state = 'PM'

}
else {
    state = 'AM'
}
fecha.textContent = ` ${semana[datos.getDate()] + '' + datos.getDay() + '' + meses[datos.getMonth()] + '' + datos.getFullYear()}` 
estado.textContent = `${state}`
tiempo.textContent =   `${datos.toLocaleTimeString()}`



}, 1000);