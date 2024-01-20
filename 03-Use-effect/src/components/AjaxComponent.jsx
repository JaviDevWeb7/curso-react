import React, { useEffect, useState } from "react";

export const AjaxComponent = () => {
  // ESTADOS

  const [page, setPage] = useState(1);
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errores, setErrores] = useState("");

  // FUNCIONES

  const getUsers = () => {
    setUsuarios([
      {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
      {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
      },
      {
        id: 9,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
      },
    ]);
  };

  const getUsuariosAjax = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then((respuesta) => respuesta.json())
      .then(
        (resultado) => {
          setUsuarios(resultado.data);
          console.log(resultado);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const getUsuariosAjaxAW = async () => {
    try {
      const peticion = await fetch("https://reqres.in/api/users?page=" + page);
      const { data } = await peticion.json();

      setUsuarios(data);
      setCargando(false);
      
    } catch (error) {
      console.log(error);
      setErrores(error.message);
    }
  };

  const next = () => {
    setPage(2);
  };

  const last = () => {
    setPage(1);
  };

  // USE-EFFECT

  useEffect(() => {
    // getUsers()
    // getUsuariosAjax()
    getUsuariosAjaxAW();
  }, [page]);

  if (errores !== "") {
    return (
      <div>
        <h2>{errores}</h2>
      </div>
    );
  } 

  else if (cargando == true) {
    return <div className="cargando">Cargando Datos...</div>;
  } 

  else if (cargando === false && errores === "") {
    return (
      <div className="ajax">
        <h2>listado de usuarios via ajax</h2>
        <ul>
          {usuarios.map((user, indice) => {
            return (
              <li key={indice}>
                <img src={user.avatar} alt="img" /> <br />
                {user.first_name}
                {user.last_name} <br />
                {user.id} <br />
              </li>
            );
          })}
        </ul>

        <button onClick={last}>anterior</button>

        <button onClick={next}>siguiente</button>
      </div>
    );
  }
};
