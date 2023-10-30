let nombre, nota1, nota2, nota3;
nombre = prompt('Ingrese el nombre del alumno')
nota1 = parseFloat(prompt('Ingrese la primer nota del alumno'))
nota2 = parseFloat(prompt('Ingrese la segunda nota del alumno'))
nota3 = parseFloat(prompt('Ingrese la tercer nota del alumno'))

if ((nota1 + nota2 + nota3) / 3 >= 7){
    alert(`El alumno ${nombre} Promocionó`)
} else {
    alert(`El alumno ${nombre} Desaprobó`)
}