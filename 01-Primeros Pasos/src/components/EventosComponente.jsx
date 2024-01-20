import React from "react";

export const EventosComponente = () => {
  const clicado = (e, nombre) => {
    console.log(`hola ${nombre} has dado click`);
  };

  const Dosclicado = (e, nombre) => {
    console.log(`hola ${nombre} has dado click 2 veces seguidas`);
  };

  const dentro = (e, nombre) => {
    console.log(`hola ${nombre} has entrado en la caja`);
  };

  const fuera = (e, nombre) => {
    console.log(`hola ${nombre} has salido de la caja`);
  };

  const estasDentro = (e, nombre) => {
    console.log(`hola ${nombre} estas dentro del input`);
  };
  const estasFuera = (e) => {
    console.log(`hola has salido del input`);
  };

  return (
    <div className="tercer-componente">
      <h1>Eventos React</h1>
      {/* ES IMPORTANTE PASAR EL EVENTO SI VAS A AÑADIR MAS PARAMETROS SINO PUEDEN AVER FALLOS */}
      <button onClick={(e) => clicado(e, "Javi")}>Dame click</button>

      <button onDoubleClick={(e) => Dosclicado(e, "Damian")}>Dame 2 click</button>

      <hr />

      <div
        id="caja"
        onMouseEnter={(e) => dentro(e, "javi")}
        onMouseOut={(e) => fuera(e, "javi")}
      >
        pasa por encima
      </div>

      <hr />

      <p>
        <input
         type="text" 
         placeholder="introduce tu nombre..." 
         onFocus={e => estasDentro(e,"javi")}
         onBlur={estasFuera}
         />
      </p>
    </div>
  );
};
