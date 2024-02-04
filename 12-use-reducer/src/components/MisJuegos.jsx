import React, { useEffect, useReducer } from "react";
import { JuegoReducer } from "../reducers/JuegoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem('juegos')) || [];
};

export const MisJuegos = () => {
  const [juegos, dispatch] = useReducer(JuegoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('juegos', JSON.stringify(juegos));
  }, [juegos]);

  const conseguirDatosForm = (e) => {
    e.preventDefault();

    let juego = {
      id: new Date().getTime(),
      titulo: e.target.titulo.value,
      descripcion: e.target.descripcion.value,
    };

    const accion = {
        type: 'crear',
        payload: juego
    };

    dispatch(accion)

  };

  const editar = (e,id) =>{

    let juego = {
        id,
        titulo: e.target.value,
        descripcion: e.target.value 
    }

    const accion = {
        type:'editar',
        payload: juego
    }
    dispatch(accion)
  }

  return (
    <div>
      <h1>Estos son mis juegos</h1>

      <p>numero de juegos:{juegos.length}</p>
        <ul>
      {juegos.map(juego => (
        <li key={juego.id}>
            {juego.titulo}
            <button onClick={()=> dispatch({type:'delete',payload:juego.id})}>X</button>
            <input type="text" onBlur={e => editar(e, juego.id)} />
        </li>
      ))}
    </ul>
      <h3>Agragar juego</h3>

      <form onSubmit={conseguirDatosForm}>
        <input type="text" name="titulo" placeholder="titulo" />
        <textarea name="descripcion" placeholder="descripcion"></textarea>
        <input type="submit" value="Guardar" />
      </form>
    </div>
  );
};
