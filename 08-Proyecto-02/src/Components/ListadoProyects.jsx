import React from "react";
import { Link } from 'react-router-dom';
import { works } from "../data/works";


export const ListadoProyects = ({limit}) => {
  return (
    <section className="works">
      {works.slice(0,limit).map((work) => {
        return (
          <article key={work.id} className="workItem">
            <div className="mask">
              <img src={`../../public/images/${work.url}.png`} />
            </div>
            <span>{work.category}</span>
            <h2>
              <Link to={`/proyecto/${work.id}`}>{work.name}</Link>
            </h2>
            <h3>{work.technology}</h3>
          </article>
        );
      })}
    </section>
  );
};
