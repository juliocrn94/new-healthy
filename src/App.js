import React from 'react';
import Description from "./components/Description";
import Map from './components/Map';
import Services2 from './components/Services2';
import Testimonios from "./components/Testimonios";
import ProgressDashboard from "./components/ProgressDashboard"; 
import Footer from './components/Footer';
import Animacion from './components/Animacion';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./css/index.css";
import "./css/Login.css";
import "./css/Nav.css";
import './App.css';
import "./css/animacion.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Animacion />
        <Description/>
        <Map /> 
        <Services2/>
        <Testimonios />
        <Footer />
      </div>
    </Router>

  );
}







export default App;
