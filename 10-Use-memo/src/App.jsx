import { useState } from 'react'
import { Gestion } from './components/Gestion'
import { Tareas } from './components/Tareas'

function App() {

  const [todosLosEmpleados , setTodosLosEmpleados]= useState([])

  return (
    <>
    {/* //EJERCICIO METODO MEMO PARA COMPONENTES */}
       {/* <Gestion 
      todosLosEmpleados={todosLosEmpleados}
      setTodosLosEmpleados={setTodosLosEmpleados}
       />  */}

       <Tareas />
    </>
  )
}

export default App
