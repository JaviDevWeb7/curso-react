import React from "react";
import { Routes, Route, NavLink, BrowserRouter, Navigate } from "react-router-dom";
import { Inicio } from "../components/Inicio";
import { Articulos } from "../components/Articulos";
import { Contacto } from "../components/Contacto";
import { Error } from "../components/Error";
import { Persona } from "../components/Persona";
import { PanelControl } from "../components/PanelControl";
import { InicioPanel } from "../components/panel/InicioPanel";
import { Acerca } from './../components/panel/Acerca';
import { Crear } from './../components/panel/Crear';

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/inicio"
              className={({ isActive }) => (isActive == true ? "activo" : "")}
            >
              Inicio
            </NavLink>
            </li>
            <li>
            <NavLink
              to="/articulos"
              className={({ isActive }) => (isActive == true ? "activo" : "")}
            >
              Articulos
            </NavLink>
            </li>
            <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) => (isActive == true ? "activo" : "")}
            >
              Contacto
            </NavLink>
          
          </li>
          <li>
            <NavLink
              to="/persona"
              className={({ isActive }) => (isActive == true ? "activo" : "")}
            >
              Persona
            </NavLink>
          
          </li>
          <li>
            <NavLink
              to="/panel"
              className={({ isActive }) => (isActive == true ? "activo" : "")}
            >
              Panel
            </NavLink>
          
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/persona/:name/:lastName" element={<Persona/>} />
        <Route path="/persona/:name" element={<Persona/>} />
        <Route path="/persona" element={<Persona/>} />

        <Route path="/panel/*" element={<PanelControl/>} >
            <Route path="crear" element={<Crear/>} />
            <Route path="acerca" element={<Acerca/>} />
            <Route path="inicio" element={<InicioPanel/>} />
            <Route index element={<InicioPanel/>} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
