import React, { useState, useEffect } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Experience from "./Experience";

const Experiences: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  const windowWidth = () => {
    let screenWidth = window.innerWidth;

    screenWidth < 768 ? setIsMobile(true) : setIsMobile(false);
  };

  useEffect(() => {
    windowWidth();
  }, []);

  return (
    <section id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>
          Experiências <span className="dot">.</span>
        </h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              animateOnce={true}
            >
                <Experience
                    year="2018-2019"
                    text="Desenvolvimento de Landing Pages, manutenção do site, montagem de e-mail-marketing, usabilidade, SEO, melhoria de performance."                    
                />
            </AnimationOnScroll>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <AnimationOnScroll
              animateIn={
                isMobile ? `animate__fadeInRight` : `animate__fadeInLeft`
              }
              animateOnce={true}
            >
                <Experience
                    year="2019-2019"
                    text="Desenvolvimento de sites, ecommerces, blogs, manutenção,
                        melhorias, configuração de ambientes, migração de sites,
                        melhoria de performance, semântica."                    
                />
            </AnimationOnScroll>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              animateOnce={true}
            >
                <Experience
                    year="2019-2021"
                    text="Desenvolvimento de Landing Pages, criação de novas
                    funcionalidades para usabilidade, manutenção do ecommerce,
                    criação de e-mail-marketing, boas práticas, semântica, SEO,
                    testes A/B, metodologia SCRUM, gerenciamento de versionamento de
                    código e deploy."                   
                />
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences  ;
