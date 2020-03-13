import React from 'react'
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <header className="header">

        <p className="titleHealthy">Healthy Break</p>
        <div id="relleno"></div>
        <nav className="menu">
            <ol>
 
                    <li> <a href="">Nosotros</a> </li>

                    <li> <a href="">Agenda tu cita</a> </li>

                    <li> <a href="">Inicia sesión</a> </li>

                    
            </ol>
        </nav>
      </header>
    </>
  )
}


export default Nav
