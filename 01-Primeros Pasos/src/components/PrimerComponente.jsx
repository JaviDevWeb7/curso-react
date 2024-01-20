import React from 'react'

export default function PrimerComponente() {

    const libros = ["harry potter","peter pan","hobbit"];
    

  return (
    <div className='primer-componente'>

        <h1>listado de libros</h1>

        {libros.length >= 1 ?(

            <ul>
                {libros.map((libro,indice) => {

                return <li key={indice}>{libro}</li> 
                
                })}
               
            </ul> 
            )
            : <p>no hay libros</p>
            
       }

    </div>
  )
}
