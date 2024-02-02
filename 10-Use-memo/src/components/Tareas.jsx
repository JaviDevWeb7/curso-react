import React, { useMemo, useState } from 'react'

export const Tareas = () => {

    const [tareas,setTareas] = useState([])
    const [contador,setContador] = useState(2000)

    const agregarTarea = (e) =>{
        e.preventDefault()

        const tareaEscrita = e.target.tarea.value.length;
        const valorTarea = e.target.tarea.value;

        if(tareaEscrita >= 1){
        
            setTareas([...tareas,valorTarea])
                        
        }else{
            alert('introduce una tarea')
        }          
    }

    const borrarTarea = (t) => {
       const nuevasTareas = tareas.filter(tarea => tarea !== t)
       setTareas(nuevasTareas)
    }

    const sumarContador = () => {
        setContador(contador + 1)
    }

    const contadoresPasados = (acumulacion) => {
        for(let i = 0; i <= acumulacion; i++){
            console.log('ejecutando acumulacion de contadores del pasado....')
        }
        return `contador manual de tareas ${acumulacion}`
    }
        // CON USE MEMO PODEMOS MEMORIZAR POR EJEMPLO ESTA FUNCION PARA NO RENDERIZAR MAS DE LA CUENTA Y PODEMOS PASARLE POR PARAMETRO CUANDO SI RENDERIZARLO
    const memoContadoresPasados = useMemo(()=> contadoresPasados(contador),[contador])

  return (
    <div className='container'>

        <h1>Mis tareas</h1>

        <form onSubmit={agregarTarea}>
            <input type="text" name='tarea'/>
            <input type="submit" value="Agregar Tarea" />
        </form>

        <h3>{memoContadoresPasados}</h3>
        <button onClick={sumarContador}>sumar</button>
        {tareas.map((tarea,indice) => (
            <div key={indice} className='cajaTarea'>
                <ul>
                <li>{tarea}</li>
                </ul>
                <button onClick={() => borrarTarea(tarea)}>X</button>
            </div>
        ))}
    </div>
  )
}
