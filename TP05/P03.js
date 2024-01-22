/*3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin. */

function agregarTarea(){
    let tarea = document.getElementById('tareaInput').value;
    if (tarea.trim() === '') {
        alert('Por favor, ingrese una tarea válida.');
        return;
    }
    let lista = document.getElementById('listaTareas');
    let li = document.createElement('li');
    li.className ='list-group-item';
    li.innerHTML=`${tarea}  <button type="button" class="btn btn-danger btn-sm float-end" onclick="eliminarTarea(this)">Eliminar</button>`;

    lista.appendChild(li);
    document.getElementById('tareaInput').value = '';//limpiar el input
}

function eliminarTarea(elemento){
    var listItem = elemento.parentNode;//obtener el padre
    listItem.parentNode.removeChild(listItem);
}