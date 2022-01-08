import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div id='home' className='header-wraper'>
      <div className='main-info'>
        <h1>
          <span>Olá, eu sou </span>Igor Rocha.
        </h1>

        <Typed
          className='typed-text'
          strings={[
            'Web developer',
            'Vtex Developer',
            'Wordpress Developer',
            'React Developer',
          ]}
          typeSpeed={60}
          backSpeed={60}
          loop
        />
        <Link
          smooth={true}
          to='contacts'
          offset={-110}
          className='btn-main-offer'
        >
          contato
        </Link>
      </div>
    </div>
  );
};

export default Header;
