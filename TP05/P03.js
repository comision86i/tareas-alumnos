/*3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin. */
let tareas = JSON.parse(localStorage.getItem('tareas')) || []
cargaInicial()
function cargaInicial(){
    if(tareas.length >0){
        tareas.forEach(tarea => {
            crearElemento(tarea);
        });
    }
    document.getElementById('tareaInput').focus();
}
function agregarTarea(){
    let tarea = document.getElementById('tareaInput').value;
    if (tarea.trim() === '') {
        alert('Por favor, ingrese una tarea válida.');
        return;
    }
    tareas.push(tarea);
    localStorage.setItem('tareas', JSON.stringify(tareas));
    crearElemento(tarea);
    document.getElementById('tareaInput').value = '';//limpiar el input
}

function crearElemento(tarea) {
    let lista = document.getElementById('listaTareas');
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `📌 - ${tarea}  <button type="button" class="btn btn-danger btn-sm float-end" onclick="eliminarTarea(this)">Eliminar</button>`;
    lista.appendChild(li);
}

function eliminarTarea(elemento){
    var listItem = elemento.parentNode; // Obtener el padre
    listItem.parentNode.removeChild(listItem);

    // Obtener el texto de la tarea que se va a eliminar
    var tareaAEliminar = listItem.textContent.trim().replace('📌 - ', '');
    tareaAEliminar = tareaAEliminar.trim().replace('  Eliminar', '');
    // Filtrar las tareas para eliminar la tarea específica
    tareas = tareas.filter(tarea => tarea != tareaAEliminar);
    localStorage.setItem('tareas', JSON.stringify(tareas));
}