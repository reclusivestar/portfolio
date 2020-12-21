import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import CCI from './Components/cci/CCI';
import PBIS from './Components/pbis/PBIS';
import TMC from './Components/tmc/TMC';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {

  constructor(props){
    super(props);


    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="App">
              <Header />
              <Portfolio />
              <Contact />
              <Footer />
            </div>
          </Route>
          <Route path="/cci">
            <CCI />
          </Route>   
          <Route path="/pbis">
            <PBIS />
          </Route>
          <Route path="/tmc">
            <TMC />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;