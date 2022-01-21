import React, {useContext} from 'react';
import UserContext from '../context/AppContext';

import Typed from 'react-typed';
import { Link } from 'react-scroll';

const Home: React.FC = () => {

  const context = useContext(UserContext)
  const MHome = context.state.messages.Home

  return (
    <section id='home' className='home-wraper'>
      <div className='main-info'>
        <h1>
          <span>{MHome.title} </span>Igor Rocha.
        </h1>

        <Typed
          className='typed-text'
          strings={[
            MHome.typedString1,
            MHome.typedString2,
            MHome.typedString3,
            MHome.typedString4
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
          {MHome.button}
        </Link>
      </div>
    </section>
  );
};

export default Home;
