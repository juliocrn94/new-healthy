import React from 'react';
import Formuser from './FormUser';
import Footer from './Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function Registro() {
  return (
    <div>
      <Formuser />
      <Footer />
    </div>
  );
}

export default Registro;