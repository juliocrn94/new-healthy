import React, { useState } from 'react';
import Nav from './Nav';
import "../css/index.css";
import "../css/Login.css";
import "../css/Nav.css";
import Login from './Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../App.css';
import ProgressDashboard from './ProgressDashboard';
import DashboardHeader from './DashboardHeader';

function Perfil() {
    const [usuarioCorrecto, setUsuarioCorrecto] = useState(false)
    const confirmarcontrasena= () => {
        const usuarioCorrecto = "Usuario"
        const contraseñaCorrecta = "1234"
        if (this.state.usuario === usuarioCorrecto && this.state.contrasena === contraseñaCorrecta) {
            console.log ("éxito!")
        }
    }
  return (
    <Router>
      <div className="App">
        { !usuarioCorrecto  && 
            <Login usuarioCorrecto={setUsuarioCorrecto} />
        }
        {usuarioCorrecto && 
            <ProgressDashboard />
        }
      </div>
    </Router>

  );
}







export default Perfil;
