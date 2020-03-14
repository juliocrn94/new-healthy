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
                    
                    <Link to='/'>
                    <li> <a href="">Nosotros</a> </li>
                    </Link>

                    <Link to='/AgendatuCita'>
                    <li> <a href="">Agenda tu cita</a> </li>
                    </Link>

                    <Link to='/Login'>
                    <li> <a href="">Inicia sesión</a> </li>
                    </Link>


                    
            </ol>
        </nav>
      </header>
    </>
  )
}


export default Nav
