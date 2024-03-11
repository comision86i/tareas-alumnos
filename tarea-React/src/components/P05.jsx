import React from 'react'
import { useState } from 'react'

const ListaDeTareas2 = () => {
    const [tarea, setTarea] = useState('');
    const [listaTareas, setListaTareas] = useState([]);
  
    function manejarKeyPress (event) {
      if (event.key === 'Enter') {
        agregarTarea();
      }
    };
  
    function agregarTarea () {
      if (tarea.trim() !== '') {
        localStorage.setItem('Tareas', JSON.stringify([...listaTareas, tarea]))
        setListaTareas([...listaTareas, tarea]);
        setTarea('');
      }
    };

    function eliminarTarea(index){
        const temp = listaTareas.filter((tarea,i) => i!==index);
        setListaTareas(temp);
        localStorage.setItem('Tareas', JSON.stringify(temp))
    }

    return (
      <div className='border border-3 border-black p-4 text-center m-5'>
        <h1>Bienvenidos</h1>
        <p>Ingresa tus tareas</p>
        <input
          className='border border-3 border-black w-75'
          type="text"
          value={tarea}
          onChange={(event) => setTarea(event.target.value)}
          onKeyPress={manejarKeyPress}
          placeholder="Ingrese una tarea y presione Enter"
        />
        <div className='m-2'>
          {listaTareas.map((tarea, i) => {
            return (
                <div className='d-flex border border-3 border-black  align-items-center justify-content-between my-2 wrap'>
                    <h3 className='px-4 wrap' key={i}>{tarea}</h3>
                    <button className='btn btn-outline-dark rounded-0' onClick={()=>eliminarTarea(i)}>X</button>
                </div>
            )
          }
          )}
        </div>
      </div>
    );
  }

export default ListaDeTareas2