import React from "react";
import { useState } from "react";
import { SaveStorage } from "../Helpers/SaveStorage";

export const Crear = ({setListadoPelis}) => {

    const title = 'Añadir pelicula'
    const [peliState, setPeliState] = useState({})

    const getDataForm = (e) => {
        e.preventDefault()

        const peli = {
            id: new Date().getTime(),
            title: e.target.title.value,
            description: e.target.description.value
        }
        setPeliState(peli)

        setListadoPelis( elementos => {
          return [...elementos, peli];
        });

        SaveStorage('Pelis', peli)
    }



  return (
    <>
      <div className="add">

        <h3 className="title">{title}</h3>

        <strong>{peliState.title && peliState.description && `Has creado la pelicula ${peliState.title}`}</strong>
        

        <form onSubmit={getDataForm}>
          <input 
          type="text" 
          id="title" 
          placeholder="Titulo"
          name="title" 
          />

          <textarea 
          id="description" 
          placeholder="Descripción"
          name="description"
          ></textarea>

          <input type="submit" id="save" value="Guardar" />
        </form>

      </div>
    </>
  );
};
