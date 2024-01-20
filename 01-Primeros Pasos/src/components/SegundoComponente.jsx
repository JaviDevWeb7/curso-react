import React from "react";
import PropTypes from "prop-types";

export const SegundoComponente = ({ nombre, apellidos, ficha }) => {


  return (
    <div className="segundo-componente">
      <h1>comunicacion de componentes</h1>

      <p>
        Bienvenido {nombre} {apellidos}
      </p>
      <p>
        altura <strong>{ficha.altura}</strong>{" "}
      </p>
    </div>
  );
};

// TIPOS DE LAS PROPIEDADES

SegundoComponente.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellidos: PropTypes.string,
  ficha: PropTypes.object,
};

//  PROPIEDADES POR DEFECTO

SegundoComponente.defaultProps = {
  nombre: "Julio",
  apellidos: "Gomez",
};
