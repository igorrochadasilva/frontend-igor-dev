import React from 'react';

import { Link } from 'react-scroll';
import { LinkedinShareButton, LinkedinIcon } from 'react-share';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-4 col-sm-6'>
            <div className='d-flex'>
              <p>Cidade São Paulo </p>
            </div>
            <div className='d-flex'>
              <a href='tel:(11) 94967-3001'>(11) 94967-3001</a>
            </div>
            <div className='d-flex'>
              <p>igor082011@gmail.com</p>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-6'>
            <div className='row'>
              <div className='col'>
                <Link
                  smooth={true}
                  to='about'
                  offset={-110}
                  className='footer-navk'
                >
                  Quem sou
                </Link>
                <br />
                <Link
                  smooth={true}
                  to='about'
                  offset={-110}
                  className='footer-navk'
                >
                  Servicos
                </Link>
                <br />
                <Link
                  smooth={true}
                  to='about'
                  offset={-110}
                  className='footer-navk'
                >
                  Experiencia
                </Link>
              </div>
              <div className='col'>
                <Link
                  smooth={true}
                  to='about'
                  offset={-110}
                  className='footer-navk'
                >
                  Portfolio
                </Link>
                <br />
                <Link
                  smooth={true}
                  to='about'
                  offset={-110}
                  className='footer-navk'
                >
                  Conhecimentos
                </Link>
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-md-2 col-sm-6 align-items-center'>
            <div className='d-flex justify-content-center'>
              <aside>
                <LinkedinShareButton
                  url={'#'}          
                >
                  <LinkedinIcon className='mx-3' size={36} />
                </LinkedinShareButton>
              </aside>
            </div>
            <p className='pt-3 text-center'>
              {/* Copyright&copy; */}
              {/* {new Date().getFullYear()}&nbsp; Igor Rocha. */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
