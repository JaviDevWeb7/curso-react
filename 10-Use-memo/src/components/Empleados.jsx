import React, { useEffect } from 'react'

export const Empleados = React.memo( ({todosLosEmpleados,setTodosLosEmpleados,pagina,saludar}) => {


    const conseguirEmpleados = async () =>{

        const peticion = await fetch(`https://reqres.in/api/users?page=${pagina}`);
        const {data: empleados} = await peticion.json();

        setTodosLosEmpleados(empleados)
    }
    useEffect(()=>{
        console.log('componente empleados cargado')
    },[todosLosEmpleados])

    useEffect(()=>{
        conseguirEmpleados()
        console.log('peticion enviada')
    },[pagina])

    saludar()

  return (
    <div>

        <h1>hola mundo</h1>

        {todosLosEmpleados.map( empleado =>(
              <section key= {empleado.id}>

              <h3>{empleado.first_name} {empleado.last_name} </h3>
          </section>
        ))}
            

    </div>
  )
})
