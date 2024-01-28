
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {

    const { name, lastName } = useParams();
    let navegar = useNavigate()


    const redirigir = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let lastName = e.target.lastName.value;

        if(name.length <= 0 || lastName.length <= 0){
            navegar("/inicio")
        }else{
            navegar('/articulos')
        }
    }

  return (
    <>
        {!name && <h1>no hay nombre</h1>}
        
        {name && <h1>Pagina de {name} {lastName}</h1>}

        <form onSubmit={redirigir}>
            <input type="text" name='name' />
            <input type="text" name='lastName'/>
            <input type="submit" value="Send" name='send' />

        </form>
        
    </>
  )
}
