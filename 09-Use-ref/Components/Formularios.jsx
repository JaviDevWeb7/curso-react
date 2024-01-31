import React, { useRef } from 'react'

export const Formularios = () => {

  const nombre = useRef()
  const apellido = useRef()
  const email = useRef()
  const h1Cambio = useRef()

const mostrar = e => {  
  e.preventDefault()

  console.log(nombre.current.value)
  console.log(apellido.current.value)
  console.log(email.current.value)

  // ASI PODEMOS SOBREESCRIBIR EL VALOR DE CURRENT HACIENDO UNA DESESTRUCTURACION DE OBJETOS
 let {current : h1} = h1Cambio

  h1.innerText = "Dios es grande en misericordia"
  h1.classList.toggle('crecer')
}

  return (
    <div className='formularios'>

        <h1 ref={h1Cambio}>Formulario</h1>

        <form onSubmit={mostrar}>
          <input type="text" placeholder='nombre' ref={nombre}/>
          <input type="text" placeholder='apellido' ref={apellido}/>
          <input type="email" name="email" placeholder='introduce tu email' ref={email}/>

          <input type="submit" value="Enviar" />
        </form>

    </div>
  )
}
