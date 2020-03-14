import React from 'react';
import Nav from './Nav';
import App from '../App'
import Registro from './Registro';
import Perfil from './Perfil';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../App.css';
import "../css/index.css";
import "../css/Login.css";
import "../css/Nav.css";

  function Home() {
    return (
      <>
        <Router>
            <Nav />
            <div className="Home">
                <Switch>
                    <Route path="/" exact component={App}  />
                    <Route path="/AgendatuCita" component={Registro}  />
                    <Route path ="/Login" component={Perfil}   />
                </Switch>
            </div>
        </Router>
      
      </>
       
    );
  }

  export default Home;
