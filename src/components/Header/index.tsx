import React, {useContext, useState} from 'react';
import logo from '../../images/logos/logoIgor.png';
import { Link } from 'react-scroll';

// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


import ToggleButton from './ToggleButton';
import UserContext from '../context/AppContext';

const Header: React.FC = () => {
  
  const context = useContext(UserContext);
  const MNavbar = context.state.messages.Navbar
  
  const [menu, SetMenu] = useState(false)
  
  const openMenu = () => SetMenu(!menu)

  return (
  <header>
    <nav id="navbar" className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <figure>
            <img className="logo" src={logo} alt="logo..." loading="lazy" width="84px" height="59px"/>
          </figure>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"    
          onClick={openMenu}
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className={`collapse navbar-collapse  ${menu && `show`}`} id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link smooth={true} to="about" offset={-110} className="nav-link">
                {MNavbar.text1}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="services"
                offset={-110}
                className="nav-link"
                href="#"
              >
                {MNavbar.text2}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="experience"
                offset={-110}
                className="nav-link"
              >
                {MNavbar.text3}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="portfolio"
                offset={-110}
                className="nav-link"
              >
                {MNavbar.text4}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                smooth={true}
                to="contacts"
                offset={-110}
                className="nav-link"
              >
                {MNavbar.text5}
              </Link>
            </li>
            <li>
              <div className="main-wrg-toggle">
                <ToggleButton />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  );
};

export default Header;
