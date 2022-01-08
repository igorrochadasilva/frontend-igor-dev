/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import author from '../../images/me.jpg';

const AboutMe = () => {
  return (
    <>
      <AnimationOnScroll animateIn='animate__fadeInDown' animateOnce={true}>
        <div id='about' className='container py-5'>
          <div className='row'>
            <div className='col-lg-6 col-xm-12'>
              <div className='photo-wrap mt-5'>
                <img
                  className='profile-img'
                  src={author}
                  alt='Igor Rocha'
                  width='417'
                  height='255px'
                  loading="lazy"
                />
              </div>
            </div>
            <div className='col-lg-6 col-xm-12'>
              <h1 className='about-heading'>
                Quem sou <span className='dot'>.</span>
              </h1>
              <p>
                  Meu nome é Igor Rocha, sou Front End Developer,
                  desenvolvo sites e ecommerces de alta qualidade,
                  com foco em responsividade, animações, performace e SEO.
                  Estou sempre buscando se atualizar com as novas tecnologias que surgem,
                  de maneira a sempre inovar e ser mais eficiente. 

              </p>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </>
  );
};

export default AboutMe;
