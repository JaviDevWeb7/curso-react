import React from 'react'
import { useMayus } from '../hooks/useMayus'

export const PruebasCustom = () => {

    const {estado,mayus,minus} = useMayus('javi chulo');


  return (
    <div>
        <h1>probando componentes personalizados</h1>
        <h2>{estado}</h2>

        <button onClick={mayus}>Crece</button>

        <button onClick={minus}>Mengua</button>

    </div>
  )
}
