import React from 'react';
import "./css/index.css";
import Description from "./components/Description";
import Footer from './components/Footer';
import './App.css';
import Map from './components/Map';
import Testimonios from "./components/Testimonios";


function App() {
  return (
    <div className="App">
      <Description/>
      <Footer />
     <Map /> 
      <Testimonios />
    </div>
  );
}

export default App;
