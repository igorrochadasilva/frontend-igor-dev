import React, {useContext} from 'react';
import UserContext from '../context/AppContext';

import Typed from 'react-typed';
import { Link } from 'react-scroll';

const Header: React.FC = () => {

  const context = useContext(UserContext)
  const MHeader = context.state.messages.Header

  return (
    <header id='home' className='header-wraper'>
      <div className='main-info'>
        <h1>
          <span>{MHeader.title} </span>Igor Rocha.
        </h1>

        <Typed
          className='typed-text'
          strings={[
            MHeader.typedString1,
            MHeader.typedString2,
            MHeader.typedString3,
            MHeader.typedString4
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
          {MHeader.button}
        </Link>
      </div>
    </header>
  );
};

export default Header;
