import React, { useEffect, useRef, useState } from 'react'

export const Ejemplo = () => {

    const [cantidadSaludos,setCantidadSaludos] = useState(0)
    const saludos = useRef(cantidadSaludos)

    const enviarSaludo = () => {
        setCantidadSaludos( cantidadSaludos + 1)
    }

    useEffect(()=>{
        saludos.current = cantidadSaludos;
        // EL USEREF() SIEMPRE VA MUTANDO Y SIEMPRE CONTIENE EL VALOR ACTUALIZADO MOSTRANDO EL DATO ACTUAL
        // SIN EMBARGO EL USESTATE , CREANDO UN ESTADO MUESTRA EL VALOR QUE TENIA EN EL MOMENTO CONCRETO 
        setTimeout(()=>{
            console.log('saludos en cola ' + saludos.current)
        },2000)
    },[cantidadSaludos])

  return (
    <div>
        <h1>ejemplo con useref</h1>


            <p>saludos enviados {cantidadSaludos}</p>
        <input type="button" onClick={enviarSaludo} value="Enviar saludo" />
    </div>
  )
}
