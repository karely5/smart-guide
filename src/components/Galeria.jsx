import React from 'react';
import Box from './Box';
import imag1 from '../images/img1.jpeg';
import imag2 from '../images/img2.jpeg';
import imag3 from '../images/img3.jpeg';
import imag4 from '../images/img4.jpeg';
import imag5 from '../images/img5.jpeg';
import imag6 from '../images/img6.jpeg';

function Galeria() {
  return (
    <div id='galeria'>
    <div className='s-heading'>
        <h1>Galería</h1>
        <p>Interfáz de usuario<span> y ensamble</span></p>
    </div>
    <div className='b-container'>
        <Box image={imag1} alte='imag1' button='UI'/>
        <Box image={imag2} alte='imag2' button='Botonera'/>
        <Box image={imag3} alte='imag3' button='Integrados'/>
    </div>
    <div className='b-container'>
        <Box image={imag4} alte='imag4' button='Cableado'/>
        <Box image={imag5} alte='imag5' button='Voltajes'/>
        <Box image={imag6} alte='imag6' button='Fuente'/>
    </div>
</div>
  )
}

export default Galeria;