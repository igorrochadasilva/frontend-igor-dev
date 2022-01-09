import React from 'react'

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

import ParticlesComponent from './components/Particles';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Experience from './components/Experience/';
import Portfolio from './components/Portfolio';
import Knowledge from './components/Knowledge';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

import GlobalContext from "./components/context/GlobalContext";


function App() {

  return (
    <>
      <ParticlesComponent />
      <GlobalContext>
        <Navbar />
        <Header />        
        <AboutMe />
        <Services />
        <Experience />        
        <Portfolio /> 
        <Knowledge />
        <Contacts />
        <Footer />
      </GlobalContext>
    </>
  );
}

export default App;