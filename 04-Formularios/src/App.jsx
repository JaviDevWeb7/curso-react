import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  const [usuario, setUsuario] = useState({})

  const [N, setN] = useState('')
  const [A, setA] = useState('')
  const [G, setG] = useState('')
  const [bio, setBio] = useState('')

  const datosForm = (e) => {

  e.preventDefault()

  const user = {
    nombre: e.target.nombre.value,
    apellido: e.target.apellido.value,
    genero: e.target.genero.value,
    bio:  e.target.textarea.value,
    enviar: e.target.enviar
  }

  setUsuario(user)
    
  };

 
  const directB = (e) => {
    setBio(e.target.value) 
   }
   const directN = (e) => {
    setN(e.target.value) 
   }
   const directA = (e) => {
    setA(e.target.value) 
   }
   const directG = (e) => {
    setG(e.target.value) 
   }
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <hr />
      {/* CONTENIDO CURSO */}
      <h1>Formularios</h1>

      {usuario.enviar  && (

      <p>nombre <strong>{N}</strong> <strong>{A}</strong>  genero <strong>{G}</strong> con biografia <strong>{bio}</strong> </p>

      )}


      <form onSubmit={datosForm}>
        <input 
         type="text"
         placeholder="nombre" 
         name="nombre"
         onChange={directN}
         />

        <input 
         type="text"
         placeholder="apellido" 
         name="apellido"
         onChange={directA}
         />

        <select name="genero" onChange={directG}>
          <option value="hombre">hombre</option>
          <option value="mujer">mujer</option>
        </select>

        <textarea placeholder="biografia" onChange={directB} name="textarea"></textarea>

        <input 
        type="submit" 
        value="enviar " 
        name="enviar"
        />
      </form>
    </>
  );
}

export default App;
