import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import HeroSection from './components/HeroSection';
import roadMap from './components/roadMap';
import tokenOmics from './components/tokenOmics';
import { BrowserRouter, Switch, Route } from 'react-router-dom';




function App() {
  return (
    <>
     <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/HeroSection' exact component={HeroSection} />
          <Route path='/roadMap' exact component={roadMap} />
          <Route path='/tokenOmics' exact component={tokenOmics} />
        </Switch>
        </BrowserRouter>
      
    </>
  );
}

export default App;
