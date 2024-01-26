import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Editar } from "./Editar";

export const Listado = ({listadoPelis, setListadoPelis}) => {

  useEffect(() => {
    getDataPelis();
  }, []);

  const [edit, setEdit] = useState(0)

  const getDataPelis = () => {
    let pelis = JSON.parse(localStorage.getItem('Pelis'));

    setListadoPelis(pelis);

    return pelis
    
  };

  const deletePeli = (id) => {
      let peliculas = getDataPelis();

    let nuevo_array = peliculas.filter( pelicula=> pelicula.id !== parseInt(id));

    setListadoPelis(nuevo_array);

    localStorage.setItem('Pelis' ,JSON.stringify(nuevo_array));

    
  }

  return (
    <>
      {listadoPelis != null ? 
        listadoPelis.map(pelis => {
          return (
            <article key={pelis.id} className="peli-item">
              <h3 className="title">{pelis.title}</h3>
              <p className="description">{pelis.description}</p>

              <button className="edit" onClick={()=> setEdit(pelis.id)}>Editar</button>
              <button onClick={()=> deletePeli(pelis.id)} className="delete">Borrar</button>

            {edit === pelis.id && (

              <Editar
              pelis = {pelis}
              getDataPelis = {getDataPelis}
              setEdit = {setEdit}
              setListadoPelis = {setListadoPelis}
              />
              
            )}

            </article>
          );
        })
       : <h2>No Hay Peliculas</h2>}
    </>
  );
};
