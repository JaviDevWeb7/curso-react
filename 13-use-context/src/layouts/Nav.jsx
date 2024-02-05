import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { PruebaContext } from "../context/PruebaContext";

export const Nav = () => {
  const { usuario, setUsuario } = useContext(PruebaContext);

  return (
    <header className="header">
      <nav>
        <div className="logo">
          <h2>aprendiendo react context</h2>
        </div>
        <ul>
          <li>
            <NavLink to={"/inicio"}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to={"/acerca"}>Acerca</NavLink>
          </li>
          <li>
            <NavLink to={"/contacto"}>Contacto</NavLink>
          </li>
          <li>
            <NavLink to={"/articulos"}>Articulos</NavLink>
          </li>

            {usuario.hasOwnProperty('nick') && usuario.nick !== null ? (
              <>
              <li>
              <NavLink to={"/"}>{usuario.nick}</NavLink>
              </li>
              <li>
              <a href="#" onClick={e => {
                e.preventDefault()
                setUsuario({})
              }}>Cerrar Sesion</a>
              </li>
              </>
            ) : (
              <li>
              <NavLink to={"/login"}>Login</NavLink>
              </li>
            )}
          
        </ul>
      </nav>
    </header>
  );
};
