import React, { useState } from "react";
import PropTypes from "prop-types";

export const EjercicioComponent = ({ year }) => {
  const [yeardate, setYeardate] = useState(year);

  const nextYear = (e) => {
    setYeardate(yeardate + 1);
  };

  const lastYear = (e) => {
    setYeardate(yeardate - 1);
  };

  const yearActualiti = (e) => {
    setYeardate(year);
  };

  const cambioYear = (e, cambio) => {
    const valor = e.target.value;

    if( isNaN(valor)){

    setYeardate(year);

    }else{
        setYeardate(valor)
    }
  };

  return (
    <div className="ejercicio">
      <button onClick={nextYear}>Next Year</button>

      <p>Year {yeardate}</p>

      <button onClick={lastYear}>Last Year</button>

      <button onClick={yearActualiti}>Real Year</button>

      <input type="text" placeholder="Cambia de year" onChange={cambioYear} />
    </div>
  );
};

EjercicioComponent.propTypes = {
  year: PropTypes.number.isRequired,
};
