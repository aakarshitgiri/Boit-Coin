import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import HeroSection from './components/HeroSection';
import roadMap from './components/roadMap';
import tokenOmics from './components/tokenOmics';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/Home' exact component={Home} />
          <Route path='/HeroSection' exact component={HeroSection} />
          <Route path='/roadMap' exact component={roadMap} />
          <Route path='/tokenOmics' exact component={tokenOmics} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
