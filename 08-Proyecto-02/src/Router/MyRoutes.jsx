import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Start } from './../Components/Start';
import { Portfolio } from './../Components/Portfolio';
import { Curriculum } from './../Components/Curriculum';
import { Services } from './../Components/Services';
import { HeaderNav } from '../Components/Layout/HeaderNav';
import { FooterComponent } from '../Components/Layout/FooterComponent';
import { Contact } from '../Components/Contact';

export const MyRoutes = () => {
  return (
    
    <BrowserRouter>

    {/* HEADER Y NAV */}

    <HeaderNav />

    {/* CONTENT */}
    
    <Routes>

    <Route path='/' element = {<Start />} />
    <Route path='/start' element = {<Start />} />
    <Route path='/portfolio' element = {<Portfolio />} />
    <Route path='/curriculum' element = {<Curriculum />} />
    <Route path='/services' element = {<Services />} />
    <Route path='/contact' element = {<Contact />} />


    </Routes>
    <hr />

    {/* FOOTER */}

    <FooterComponent />
    
    </BrowserRouter>
    
    
  )
}
