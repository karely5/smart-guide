import React from 'react';
import featureimage from '../images/marca.png';

function Features() {
  return (
    <div id='features'>
      <div className='features-model'>
        <img src={featureimage} alt="feature-image"/>
      </div>
      <div className='features-text'>
        <h2>Características</h2>
        
        <p>Dispositivo de comunicación a distancia, este dispositivo estará implementado en un microcontrolador Arduino el cual contará con un módulo Bluetooth para poder permitir la comunicación mediante un software preinstalado. En un extremo de la comunicación estará la persona que mandara instrucciones al atleta mismas que serán interpretadas por él, todo esto será en tiempo real de modo que el atleta pueda desarrollar un mejor desempeño durante la competencia.</p>
      {/*   <button>View More Features</button> */}
      </div>
    </div>
   
  )
}

export default Features;