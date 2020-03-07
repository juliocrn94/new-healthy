import React from 'react';
import "./css/index.css";
import Description from "./components/Description";
import Footer from './components/Footer';
import './App.css';
import Map from './components/Map';
import Testimonios from "./components/Testimonios";
import { findByLabelText } from '@testing-library/react';


function App() {
  return (
    <div className="App">
      <Description/>git
      <Map /> 
      <Footer />
      <Testimonios />

    </div>
  );
}







export default App;
