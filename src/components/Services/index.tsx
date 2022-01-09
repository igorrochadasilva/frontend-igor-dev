/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import Service from './Service';

import { AnimationOnScroll } from 'react-animation-on-scroll';
import { faDesktop, faFileCode, faEnvelope, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Services: React.FC = () => {
  return (
    <section id='services' className='services'>
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
              <Service               
                icon={faDesktop}
                title="WebSites"
                text="Criação de sites responsivos, landing pages, blogs, sites dinânicos."
              />              
            </AnimationOnScroll>
          </div>
          {/* - */}
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <AnimationOnScroll
              animateIn='animate__fadeInDown'
              animateOnce={true}
              delay={100}
            >
              <Service               
                icon={faShoppingCart}
                title="Ecommerce"
                text="Criação de lojas virtuais customizadas, utilizando plataformas como: Vtex."
              />   
            </AnimationOnScroll>
          </div>
          {/* - */}
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <AnimationOnScroll
              animateIn='animate__fadeInDown'
              animateOnce={true}
              delay={200}
            >
              <Service               
                icon={faFileCode}
                title="Wordpress"
                text="Criação e customização de templates, correções e atualizações de plugins."
              />              
            </AnimationOnScroll>
          </div>
          {/* - */}
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <AnimationOnScroll
              animateIn='animate__fadeInDown'
              animateOnce={true}
              delay={300}
            >
              <Service               
                icon={faEnvelope}
                title="Email Marketing"
                text="Desenvolvimento de Email Marketing e templates customizados."
              />                 
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
