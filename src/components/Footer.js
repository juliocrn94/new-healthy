import React from 'react';
import {ReactComponent as Facebook} from '../images/facebook.svg'
import {ReactComponent as Instagram} from '../images/instagram.svg'
import {ReactComponent as Linkedin} from '../images/linkedin.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <p>Contacto</p>
      <br/>
      <p>Teléfono</p>
      <p>5555555555</p>
      <div className='redes_sociales'>
        <div className='redes_element'>
          <Facebook />
        </div>
        <div className='redes_element'>
          <Instagram />
        </div>
        <div className='redes_element'>
          <Linkedin />
        </div>
      </div>
    </div>
  );
};

export default Footer;