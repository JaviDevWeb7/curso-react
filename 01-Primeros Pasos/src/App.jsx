import { useState } from 'react'
import './App.css'
import PrimerComponente from './components/PrimerComponente';
import { SegundoComponente } from './components/SegundoComponente';
import { EventosComponente } from './components/EventosComponente';

function App() {

  const ficha_medica = {
    altura: "170cm",
    grupo: "b-",
    estado: "bueno",
    edad: 22
  }

  return (
    <>

      <PrimerComponente/>

      <hr />

      <SegundoComponente 
      nombre='juan'
      apellidos = "hernandez"
      ficha = {ficha_medica}
      />

      <hr />

      <EventosComponente/>

    </>
  )
}

export default App
