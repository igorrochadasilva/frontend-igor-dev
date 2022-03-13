import * as React from 'react'

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


const GlobalContext = React.lazy(() => import("./components/context/GlobalContext"));
const BackgroundAnimation = React.lazy(() => import("./components/BackgroundAnimation"));
const Header = React.lazy(() => import("./components/Header"));
const Home = React.lazy(() => import("./components/Home"));
const AboutMe = React.lazy(() => import("./components/AboutMe"));
const Services = React.lazy(() => import("./components/Services"));
const Experience = React.lazy(() => import("./components/Experience/"));
const Portfolio = React.lazy(() => import("./components/Portfolio"));
const Knowledge = React.lazy(() => import("./components/Knowledge"));
const Contacts = React.lazy(() => import("./components/Contacts"));
const Footer = React.lazy(() => import("./components/Footer"));

function App() {

  return (
    <div>      
      <React.Suspense fallback={<div>Carregando...</div>}>        
        <BackgroundAnimation />
        <GlobalContext>
          <Header />
          <Home />        
          <AboutMe />
          <Services />
          <Experience />        
          <Portfolio /> 
          <Knowledge />
          <Contacts />
          <Footer />
        </GlobalContext>
      </React.Suspense>
    </div>
  )
}

export default App;
