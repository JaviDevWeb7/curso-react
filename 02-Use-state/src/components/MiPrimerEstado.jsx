import React from "react";
import { useState } from "react";

export const MiPrimerEstado = () => {
  
  const [nombre, setNombre] = useState("javi");

  const cambiarNombre = (e, nombreCambio) => {
    // nombre === "javi" ? setNombre("laPaca") : setNombre("javi")
    setNombre(nombreCambio);
  };

  return (
    <div className="primer-estado">
      <h3>Componente: Mi primer estado {nombre}</h3>

      <button onClick={(e) => cambiarNombre(e, "laPaca")}>
        Cambia El Nombre
      </button>

      <input
        type="text"
        placeholder="Escribe tu nombre"
        onChange={(e) => cambiarNombre(e, e.target.value)}
      />
    </div>
  );
};
