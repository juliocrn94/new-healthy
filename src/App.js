import React from 'react';
import "./css/index.css";

import './App.css';
import Map from './components/Map';
import Testimonios from "./components/Testimonios";
import { findByLabelText } from '@testing-library/react';

import Description from "./components/Description";
import Footer from './components/Footer';
import Formuser from './components/FormUser';

function App() {
  return (
    <div className="App">
      <Formuser/>
      <Description/>
      <Map /> 
      <Footer />
      <Testimonios />

    </div>
  );
}







export default App;
