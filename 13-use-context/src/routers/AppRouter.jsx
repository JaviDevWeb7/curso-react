import React, { useContext } from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import { Inicio } from './../components/Inicio';
import { Acerca } from './../components/Acerca';
import { Contacto } from './../components/Contacto';
import { Login } from './../components/Login';
import { Articulos } from './../components/Articulos';
import { ErrorPage } from './../components/ErrorPage';
import { Nav } from '../layouts/Nav';


export const AppRouter = () => {


  return (
    
    <BrowserRouter>

    {/* NAV */}
    
    <Nav />

    <section className='content'>
    <Routes>

        <Route path='/' element = {<Inicio />} />
        <Route path='inicio' element = {<Inicio />} />
        <Route path='acerca' element = {<Acerca />} />
        <Route path='contacto' element = {<Contacto />} />
        <Route path='login' element = {<Login />} />
        <Route path='articulos' element = {<Articulos />} />
        <Route path='*' element = {<ErrorPage />} />

    </Routes>
    </section>
    
    </BrowserRouter>
  )
}
