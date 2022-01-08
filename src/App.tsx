import React from 'react'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

import ParticlesComponent from './components/Particles/Particles';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Knowledge from './components/Knowledge/Knowledge';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

import GlobalContext from "./components/context/GlobalContext";


function App() {

  return (
    <main>
      <ParticlesComponent />
      <GlobalContext>
        <Navbar />
        <Header />
        <AboutMe />
        <Services />
        <Experience />
        <Portfolio /> {/* ver type depois*/}
        <Knowledge />
        <Contacts />
        <Footer />
      </GlobalContext>
    </main>
  );
}

export default App;
