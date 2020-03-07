import React from 'react';
import "./css/index.css";
import Description from "./components/Description";
import Footer from './components/Footer';
import './App.css';
import Map from './components/Map';

function App() {
  return (
    <div className="App">
      <Description/>
      <Footer />
     <Map /> 
    </div>
  );
}

export default App;
