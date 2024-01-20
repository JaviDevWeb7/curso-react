import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(()=>{
        // CUANDO SE MONTA
        alert('montado')

        // CUANDO SE DESMONTA
        return() => {
            alert('desmontado')
        }
        
    },[])

  return (
    <div className='aviso'>
        <h3>Bienvenido Javier</h3>
    </div>
  )
}
