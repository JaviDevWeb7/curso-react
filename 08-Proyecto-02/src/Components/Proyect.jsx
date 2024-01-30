import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { works } from "../data/works";

export const Proyect = () => {
  let { id } = useParams();
  const [proyect, setProyect] = useState({});

  useEffect(() => {
    let proyect = works.filter((work) => work.id === id);
    setProyect(proyect[0]);
  }, []);

  return (
    <div className="page pageWork">
      <div className="mask">
        <img src={`../../public/images/${proyect.url}.png`} />
      </div>

      <h1 className="heading">Proyecto: {proyect.name}</h1>
      <p>{proyect.technology}</p>
      <p>{proyect.description}</p>
      <a href={'https://'+proyect.url} target="_blank">Ir al proyecto</a>

    </div>
  );
};
