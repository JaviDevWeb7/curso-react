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
            <li><NavLink to= '/start' className={({isActive}) => isActive == true ? 'active': ''}>Start</NavLink></li>
            <li><NavLink to= '/portfolio' className={({isActive}) => isActive == true ? 'active': ''}>Portfolio</NavLink></li>
            <li><NavLink to= '/curriculum' className={({isActive}) => isActive == true ? 'active': ''}>Curriculum</NavLink></li>
            <li><NavLink to= '/services' className={({isActive}) => isActive == true ? 'active': ''}>Services</NavLink></li>
            <li><NavLink to= '/contact' className={({isActive}) => isActive == true ? 'active': ''}>Contact</NavLink></li>
        </ul>
    </nav>

    </header>
    </>
  )
}
