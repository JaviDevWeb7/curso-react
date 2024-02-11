import React from 'react'
import { useId } from 'react'

export const MiComponente = () => {

    // GENERA UN ID UNICO
    const id = useId()

    
  return (
    <div>
        <h1>hook useID</h1>
        <input type="text" id={id} name='nombre' placeholder='nombre' />
    </div>
  )
}
