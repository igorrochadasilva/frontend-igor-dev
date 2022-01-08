/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Services = () => {
  return (
    <div id='services' className='services'>
      <h1 className='py-5'>
        Serviços <span className='dot'>.</span>
      </h1>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <AnimationOnScroll
              animateIn='animate__fadeInDown'
              animateOnce={true}
            >
              <div className='box'>
                <div className='circle'>
                  <FontAwesomeIcon
                    className='icon'
                    icon={faDesktop}
                    size='2x'
                  />
                </div>
                <h3>WebSites</h3>
                <p>
                  Criação de sites responsivos, landing pages, blogs, sites
                  dinânicos.
                </p>
              </div>
            </AnimationOnScroll>
          </div>
          {/* - */}
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <AnimationOnScroll
              animateIn='animate__fadeInDown'
              animateOnce={true}
              delay={100}
            >
              <div className='box'>
                <div className='circle'>
                  <FontAwesomeIcon
                    className='icon'
                    icon={faFileCode}
                    size='2x'
                  />
                </div>

                <h3>Ecommerce</h3>
                <p>
                  Criação de lojas virtuais customizadas, utilizando plataformas
                  como: Vtex.
                </p>
              </div>
            </AnimationOnScroll>
          </div>
          {/* - */}
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <AnimationOnScroll
              animateIn='animate__fadeInDown'
              animateOnce={true}
              delay={200}
            >
              <div className='box'>
                <div className='circle'>
                  <FontAwesomeIcon
                    className='icon'
                    icon={faFileCode}
                    size='2x'
                  />
                </div>

                <h3>Wordpress</h3>
                <p>
                  Criação e customização de templates, correções e atualizações
                  de plugins.
                </p>
              </div>
            </AnimationOnScroll>
          </div>
          {/* - */}
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <AnimationOnScroll
              animateIn='animate__fadeInDown'
              animateOnce={true}
              delay={300}
            >
              <div className='box'>
                <div className='circle'>
                  <FontAwesomeIcon
                    className='icon'
                    icon={faFileCode}
                    size='2x'
                  />
                </div>
                <h3>Email Marketing</h3>
                <p>
                  Desenvolvimento de Email Marketing e templates customizados.
                </p>
                .
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
