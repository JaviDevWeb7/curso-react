import React from "react";

export const Editar = ({pelis,getDataPelis,setEdit,setListadoPelis}) => {

  const editarPelicula = (e, id) => {
    e.preventDefault()
    
    let peliculas = getDataPelis()
    let indice = peliculas.findIndex(peli => peli.id === id)
    let nuevaPelicula = {
      id,
      title: e.target.title.value,
      description: e.target.description.value
    }

    peliculas[indice] = nuevaPelicula

    localStorage.setItem('Pelis', JSON.stringify(peliculas))
    setListadoPelis(peliculas)
    setEdit(0)
  }


  return (
    <div className="edit_form">
      <h1>Editar Pelicula</h1>

      <form onSubmit={e => editarPelicula(e, pelis.id)}>
        <input type="text" 
        name="title"
        className="titleEdit"
        defaultValue={pelis.title}
        />
        <textarea 
        name="description"
        className="descriptionEdit"
        defaultValue={pelis.description}
        ></textarea>

        <input 
        type="submit" 
        value="Editar" 
        className="inputEdit"
        />
      </form>
    </div>
  );
};
