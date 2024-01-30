import React from 'react'

export const Contact = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>

      <form className='contact' action='mailto:javi-main@outlook.es'>

        <input type="text" placeholder='Nombre' />
        <input type="text" placeholder='Apellidos' />
        <input type="email" name="email" placeholder='Email' />
        <textarea name="textarea" placeholder='Motivo de contacto'/>

        <input type="submit" value="Enviar" className='buttonContact' />

      </form>

    </div>
  )
}
