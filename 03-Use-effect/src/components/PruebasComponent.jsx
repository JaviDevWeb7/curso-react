import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent'

export const PruebasComponent = () => {

    // ESTADOS

    const [usuario,setUsuario] = useState('Escribe tu nombre...')

    const [contador,setContador] = useState(1)

    // FUNCIONES

    const modUsuario = (e) => {
        e.target.value.length >= 1 ? setUsuario(e.target.value) : setUsuario('Escribe tu nombre...')
    }

    // USE EFFECT

    // CON LOS [] EL USEEFFECT SOLO SE EJECUTARA 1 VEZ AL CARGAR EL COMPONENTE SI ESTAN VACIOS
    useEffect(()=>{
        console.log('hola pito')
    }, [])

    useEffect(()=>{

        setContador(contador + 1)
        console.log('has actualizado el componente usuario : ' + contador + ' veces')

    }, [usuario])


  return (
    <div className='pruebas'>

        <h1>Use-effect</h1>

        <strong className={contador >= 10 ? 'green' : undefined} >{usuario}</strong>

        <p>
            <input 
            type="text" 
            onChange={modUsuario}
            />
        </p>
    <hr />
        
        {usuario == 'javier' && <AvisoComponent />}
        
        
    </div>
  )
}
