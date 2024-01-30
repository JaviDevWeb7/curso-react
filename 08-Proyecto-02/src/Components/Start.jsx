import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoProyects } from './ListadoProyects'

export const Start = () => {
  return (
    <div className='home'>

        <h1>
          Hola, soy <strong>Javier Bermudez</strong> y soy Desarrollador Web en Castellon,
          y ofrezco mis servicios de <strong>programacion</strong> y  <strong>desarrollo </strong> en todo
          tipo de proyectos web.
        </h1>

        <h2>
          Te ayudo a crear tu sitio o aplicacion web, tener mas
          visibilidad y relevancia en internet. <Link to= '/contact'> Contacta conmigo </Link>
        </h2>

        <section className='lasts-works'>
          <h2 className='heading'>Algunos de mis proyectos</h2>
          <p>Estos son algunos de mis trabajos de desarrollo web.</p>

          <ListadoProyects limit = '4' />

        </section>

    </div>
  )
}
