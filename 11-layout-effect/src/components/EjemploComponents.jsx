import { useEffect, useLayoutEffect } from "react"

export const EjemploComponents = () => {

    // RESUMIDAMENTE SON EXACTAMENTE IGUALES PERO USE LAYOUT EFFECT SE CARGA ANTES ENTONCES PUEDE LLEGAR A SOLUCIONAR ALGUN PROBLEMA
  useEffect(()=>{
    console.log('useEffect:cargado')
  },[])

  useLayoutEffect(()=>{
    console.log('useLayoutEffect:cargado')

  },[])

  return (
    <div>
        <h1>Ejemplo useEffect y useLayoutEffect</h1>
    </div>
  )
}
