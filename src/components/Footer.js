import React from 'react';
import {ReactComponent as Facebook} from '../images/facebook.svg'
import {ReactComponent as Instagram} from '../images/instagram.svg'
import {ReactComponent as Linkedin} from '../images/linkedin.svg'
import Logo from "../images/logoHB_bco-01.png" 


const Footer = () => {
  return (
    <div className='footer'>
      <div className="logo-footer" >
        <img className="logonav" src={Logo} alt="Healthy Break"></img>
      </div>
      <div className="datos-footer" >
        <p>Contacto: hola@healthybreak.com</p>
        <p>Teléfono:</p>
        <p>55 4875 2658</p>
      </div>
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