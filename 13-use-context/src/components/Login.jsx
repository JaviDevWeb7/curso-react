import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Login = () => {

  const {usuario,setUsuario} = useContext(PruebaContext)

  const guardarDatos = e => {
    e.preventDefault()

    let user  = {
      nick: e.target.nick.value,
      nombre: e.target.nombre.value,
      web: e.target.web.value
    }

    {user.nick == '' ?(
      setUsuario('')
    ):setUsuario(user)}
    

  }
  return (
    <div>
    <h1>login</h1>
    <p>pagina de login</p>

    <form className='login' onSubmit={guardarDatos}>

      <input type="text" name='nick' placeholder='nick name' />
      <input type="text" name='nombre' placeholder='nombre..' />
      <input type="text" name='web' placeholder='web..' />

      <input type="submit" value="Enviar" />
    </form>
  </div>
  )
}
