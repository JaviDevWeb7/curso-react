import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <>
    <h1>404 Pagina no Encontrada</h1>
    <p>Parece que la pagina no existe</p>

    <Link to='/inicio'>vuelve al inicio</Link>
    </>
  )
}
