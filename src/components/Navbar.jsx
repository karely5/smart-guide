import React from 'react'
import {Link} from 'react-scroll';
import logo from '../images/log.PNG';

function Navbar() {
  return (
    <div>
      <nav>
        <Link to = 'main' className='logo' smooth={true} duration={2000}>
          <img src={logo} alt='logo'/>
        </Link>
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
          <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
          <li><Link to='main' className='active' smooth={true} duration={1000}>Inicio</Link></li>
          <li><Link to='quienes-somos' smooth={true} duration={2000}>Quienes somos</Link></li>
          <li><Link to='features' smooth={true} duration={2000}>Proyecto</Link></li>
          <li><Link to='galeria' smooth={true} duration={2000}>Galería</Link></li>
          <li><Link to='suscribe' smooth={true} duration={2000}>Contacto</Link></li>
        </ul>
        <Link to='#' className='hey'>Smart Guide</Link>
      </nav>
    </div>
  )
}

export default Navbar;