import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <>
    <h1>panel control</h1>

        <ul>
            <li><NavLink to='/panel/acerca'>Acerca</NavLink></li>
            <li><NavLink to='/panel/crear'>Crear</NavLink></li>
            <li><NavLink to='/panel/inicio'>Inicio</NavLink></li>        
        </ul>

        <div>
            <Outlet />
        </div>
    </>
  )
}
