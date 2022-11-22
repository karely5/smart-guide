import React from 'react';
import Box from './Box';
import image1 from '../images/erick.jpeg';
import image2 from '../images/karely2.PNG';
import image3 from '../images/josue.jpeg';
import image4 from '../images/hector.jpeg';
import image5 from '../images/samuel.jpeg';

function Services() {
  return (
    <div id='quienes-somos'>
        <div className='s-heading'>
            <h1>Quienes somos</h1>
            <p>Orgullosamente <span>Ingenieros</span> <span className='buapos'>BUAP</span></p>
        </div>
        <div className='b-container'>
            <Box image={image2} alte='image2' button='Karely Navarrete'/>
            <Box image={image3} alte='image2' button='Josue Sanchez'/>
            <Box image={image4} alte='image2' button='Hector Valencia'/>
            <Box image={image1} alte='image1' button='Erick Carreón'/>
            <Box image={image5} alte='image2' button='Samuel Lopez'/>
        </div>
        {/* <div className='b-container'>
            <Box image={image1} alte='image1' button='Karely Navarrete'/>
            <Box image={image2} alte='image2' button='Karely Navarrete'/>
        </div> */}
    </div>
  )
}

export default Services;