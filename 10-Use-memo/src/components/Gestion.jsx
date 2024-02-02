import React, { useCallback, useEffect, useRef, useState } from "react";
import { Empleados } from "./Empleados";

export const Gestion = ({todosLosEmpleados,setTodosLosEmpleados}) => {

    const [pagina,setPagina]= useState(1)

    const [nombre, setNombre] = useState('')

    const cambiarNombre = (e) =>{
        setNombre(e.target.value)
    }

    useEffect(()=>{
    console.log('nombre gestor actualizado')
    },[nombre])


      // AQUI ESTA EL USE CALLBACK QUE ES MUY PARECIDO AL USE MEMO PERO SE USA MAS A NIVEL DE FUNCIONES
    const saludar = useCallback(() => {
      console.log('hola desde empleados')
    },[pagina])
  return (
    <div>
      <h1>nombre del gestor: {nombre}</h1>

      <input type="text" placeholder="introduce tu nombre" onChange={cambiarNombre} />

      <h2>listado de empleados</h2>
      <p>los usuarios vienen de jsonplaceholder</p>

      <button onClick={()=> setPagina(1)}>pagina 1</button>
      <button onClick={()=> setPagina(2)}>pagina 2</button>

      <Empleados 
      todosLosEmpleados={todosLosEmpleados}
      setTodosLosEmpleados={setTodosLosEmpleados} 
      pagina = {pagina}
      saludar = {saludar}
      />
    </div>
  );
};
