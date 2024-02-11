import { useState } from 'react';


export const useMayus = (texto) => {

    const [miTexto,setMiTexto] = useState(texto)


    const mayus = () => {
       setMiTexto(texto.toUpperCase())
    }

    const minus = () => {
        setMiTexto(texto.toLowerCase())
     }

    return {
        estado: miTexto,
        mayus,
        minus
    };

}