import React from 'react';
import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {
  return (
    <>
    <header className='header'>

    <div className="logo">
        <span>J</span>
    <h3>Javier Bermudez Web</h3>
    </div>
    

    <nav>
        <ul>
            <li><NavLink to= '/start'>Start</NavLink></li>
            <li><NavLink to= '/portfolio'>Portfolio</NavLink></li>
            <li><NavLink to= '/curriculum'>Curriculum</NavLink></li>
            <li><NavLink to= '/services'>Services</NavLink></li>
            <li><NavLink to= '/contact'>Contact</NavLink></li>
        </ul>
    </nav>

    </header>
    </>
  )
}
