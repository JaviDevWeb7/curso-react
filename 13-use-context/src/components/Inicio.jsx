import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Inicio = () => {

  const {usuario, setUsuario} = useContext(PruebaContext)

  return (
    <div>
      <h1>inicio</h1>
      <p>pagina de inicio</p>
      
    </div>
  )
}
