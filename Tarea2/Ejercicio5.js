//5.- Solicitar que se ingrese dos veces una clave. Mostrar un mensaje si son iguales (tener en cuenta que para ver si dos variables tienen el mismo valor almacenado debemos utilizar el operador ==)
let clave1 = prompt("Ingrese su clave:");
let clave2 = prompt("Ingrese su clave nuevamente:");
if(clave1 == clave2){
    document.write("<h1><strong>Las claves son iguales</strong></h1>")
}else{
    document.write("ERROR");
}