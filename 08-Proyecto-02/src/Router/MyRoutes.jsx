import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Start } from './../Components/Start';
import { Portfolio } from './../Components/Portfolio';
import { Curriculum } from './../Components/Curriculum';
import { Services } from './../Components/Services';
import { HeaderNav } from '../Components/Layout/HeaderNav';
import { FooterComponent } from '../Components/Layout/FooterComponent';
import { Contact } from '../Components/Contact';
import { PageError } from '../Components/PageError';
import { Proyect } from '../Components/Proyect';

export const MyRoutes = () => {
  return (
    
    <BrowserRouter>

    {/* HEADER Y NAV */}

    <HeaderNav />

    {/* CONTENT */}
    <section className='content'>
       <Routes>

          <Route path='/' element = {<Navigate to= '/start'/>} />
          <Route path='/start' element = {<Start />} />
          <Route path='/portfolio' element = {<Portfolio />} />
          <Route path='/curriculum' element = {<Curriculum />} />
          <Route path='/services' element = {<Services />} />
          <Route path='/contact' element = {<Contact />} />
          <Route path='/proyecto/:id' element = {<Proyect />} />
          <Route path='*' element = {<PageError />} />


    </Routes>
    </section>
   

    {/* FOOTER */}

    <FooterComponent />
    
    </BrowserRouter>
    
    
  )
}
