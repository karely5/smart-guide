import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <div id='main'>
      <Navbar/>
      <div className='name'>
        <h1>It´s <span>Smart-Guide</span></h1>
       
        <div className='header-btns'>
          <a href="#" className='cv-btn'>Hire Me</a>
          <a href="#" className='cv-btn1'>Download App</a>
        </div>
        <div className='arrow'></div>
      </div>
    </div>
  )
}

export default Header;