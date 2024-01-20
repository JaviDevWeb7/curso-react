import { useState } from "react";
import "./App.css";
import { MiPrimerEstado } from "./components/MiPrimerEstado";
import { EjercicioComponent } from "./components/EjercicioComponent";

function App() {
  
  const yearActual = new Date().getFullYear();

  return (
    <>
      <EjercicioComponent year={yearActual} />

      <hr />

      <MiPrimerEstado />

      <hr />
    </>
  );
}

export default App;
