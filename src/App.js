import React from 'react';
import Nav from './Nav';
import "./css/index.css";
import "./css/Login.css";
import "./css/Nav.css";
import Description from "./components/Description";
import Footer from './components/Footer';
import Login from './Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Map from './components/Map';
import Testimonios from "./components/Testimonios";
import Formuser from './components/FormUser';
import ProgressDashboard from './components/ProgressDashboard';
import DashboardHeader from './components/DashboardHeader';

function App() {
  return (
    <Router>
      <div className="App">
        <ProgressDashboard />
        <Formuser/>
        <Description/>
        <Map /> 
        <Footer />
        <Testimonios />

        {/* <Nav />
        <Login />
          <Switch>
            <Route path="/Login" exact component={Login}  />
          </Switch>
        <Description/>
        <Map /> 
        <Footer /> */}
      </div>
    </Router>

  );
}







export default App;
