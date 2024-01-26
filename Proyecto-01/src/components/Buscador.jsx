import React, { useState } from "react";

export const Buscador = ({ listadoPelis, setListadoPelis }) => {
  const [busqueda, setBusqueda] = useState("");
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPeli = (e) => {
    setBusqueda(e.target.value);

    let peliculasEncontradas = listadoPelis.filter((peli) => {
      return peli.title.toLowerCase().includes(busqueda.toLocaleLowerCase());
    });

    if (busqueda.length <= 1 || peliculasEncontradas <= 0) {
      peliculasEncontradas = JSON.parse(localStorage.getItem("Pelis"));
      setNoEncontrado(true);
    } else {
      setNoEncontrado(false);
    }
    setListadoPelis(peliculasEncontradas);
  };

  return (
    <>
      <div className="search">
        <h3 className="title">Buscador: {busqueda}</h3>
        {(noEncontrado == true && busqueda.length > 1) && <span>No hay coincidencias</span>}
        <form>
          <input
            type="text"
            id="search_field"
            onChange={buscarPeli}
            name="busqueda"
          />
          <button id="search">Buscar</button>
        </form>
      </div>
    </>
  );
};
