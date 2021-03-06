import React, { useContext } from "react";

// FONTAWESOME IMPORTS
import { iconSearch } from "../icons/Icons";

// REACT POPUPBOX
import { PopupboxManager} from "react-popupbox";
import PopupboxContainers from "./PopupboxContainer"
import "react-popupbox/dist/react-popupbox.css";


import { AnimationOnScroll } from "react-animation-on-scroll";

import imgRihappy from "../../images/projects/rihappy/home.webp";
import imgVivenda from "../../images/projects/vivenda-do-caramao/home.webp";
import imgPhooto from "../../images/projects/phooto/home.webp";
import imgKatmandu from "../../images/projects/katmandu/home.webp";

import imgSbed from "../../images/projects/sbed/home.webp";
import imgSaoCristovao from "../../images/projects/sao-cristovao/home.webp";
import imgCaido from "../../images/projects/caiado-pneus/home.webp";
import imgBardahl from "../../images/projects/bardahl/home.webp";

import BoxImage from "./BoxImage";
import UserContext from "../context/AppContext";

const Pofrfolio = () => {
  
  const context = useContext(UserContext)
  const MPortfolios = context.state.messages.Portfolios
  
  // Projeto 1
  const openPopupboxRihappy = () => {
    const content = (
      <>
        <figure>
        <img
          className="portfolio-image-popupbox"
          src={imgRihappy}
          alt="Rihappy"
          loading="lazy"
        />
        </figure>
        <p className="mt-2">
          <b>{MPortfolios.project} </b>{MPortfolios.project1.text}
        </p>
        <p>
          <b>Link: </b>
          <a
            href="/"
            className="hyper-link"
            onClick={() => window.open("https://rihappy.com.br/")}
          >
            https://rihappy.com.br
          </a>
        </p>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Ri Happy",
        },
      },
    });
  };

  // projeto 2
  const openPopupboxVivenda = () => {
    const content = (
      <>
        <figure>
        <img
          className="portfolio-image-popupbox"
          src={imgVivenda}
          alt="Vivenda do Camar??o"
          loading="lazy"
        />
        </figure>
        <p className="mt-2">
          <b>{MPortfolios.project} </b>{MPortfolios.project2.text}
        </p>
        <p>
          <b>Link: </b>
          <a
            href="/"
            className="hyper-link"
            onClick={() =>
              window.open("https://www.emporiovivendadocamarao.com.br/")
            }
          >
            https://www.emporiovivendadocamarao.com.br/
          </a>
        </p>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Vivenda do Camar??o",
        },
      },
    });
  };

  //projeto 3
  const openPopupboxPhooto = () => {
    const content = (
      <>
        <figure>
        <img
          className="portfolio-image-popupbox"
          src={imgPhooto}
          alt="Phooto"
          loading="lazy"
        />
        </figure>
        <p className="mt-2">
          <b>{MPortfolios.project} </b>{MPortfolios.project3.text}
        </p>
        <p>
          <b>Link: </b>
          <a
            href="/"
            className="hyper-link"
            onClick={() => window.open("https://www.phooto.com.br/")}
          >
            https://www.phooto.com.br/
          </a>
        </p>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Loja Phooto",
        },
      },
    });
  };

  // Projeto 4
  const openPopupboxKatmandu = () => {
    const content = (
      <>
        <figure>
        <img
          className="portfolio-image-popupbox"
          src={imgKatmandu}
          alt="Katmandu"
          loading="lazy"
        />
        </figure>
        <p className="mt-2">
          <b>{MPortfolios.project} </b>{MPortfolios.project4.text}
        </p>
        <p>
          <b>Link: </b>
          <a
            href="/"
            className="hyper-link"
            onClick={() => window.open("https://www.katmandu.com.br/")}
          >
            https://www.katmandu.com.br/
          </a>
        </p>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Katmandu",
        },
      },
    });
  };

  // Projeto 5
  const openPopupboxSbed = () => {
    const content = (
      <>
        <figure>
        <img className="portfolio-image-popupbox" src={imgSbed} alt="SBED" loading="lazy" />
        </figure>
        <p className="mt-2">
          <b>{MPortfolios.project} </b>{MPortfolios.project5.text}
        </p>
        <p>
          <b>Link: </b>
          <a
            href="/"
            className="hyper-link"
            onClick={() => window.open("https://sbed.org.br/")}
          >
            https://sbed.org.br
          </a>
        </p>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "SBED",
        },
      },
    });
  };

  // Projeto 6
  const openPopupboxSaoCristovao = () => {
    const content = (
      <>
        <figure>
        <img
          className="portfolio-image-popupbox"
          src={imgSaoCristovao}
          alt="S??o Cristov??o"
          loading="lazy"
        />
        </figure>
        <p className="mt-2">
          <b>{MPortfolios.project} </b>{MPortfolios.project6.text}
        </p>
        <p>
          <b>Link: </b>
          <a
            href="/"
            className="hyper-link"
            onClick={() => window.open("https://sbed.org.br/")}
          >
            https://sbed.org.br
          </a>
        </p>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "S??o Cristov??o",
        },
      },
    });
  };

  // Projeto 7
  const openPopupboxCaiado = () => {
      
    const content = (
      <>
        <figure>
        <img
          className="portfolio-image-popupbox"
          src={imgCaido}
          alt="Caido Pneus"
          loading="lazy"
        />
        </figure>
        <p className="mt-2">
          <b>{MPortfolios.project} </b>{MPortfolios.project7.text}
        </p>
        <p>
          <b>Link: </b>
          <a
            href="/"
            className="hyper-link"
            onClick={() => window.open("https://www.caiadopneus.com.br/")}
          >
            https://www.caiadopneus.com.br/
          </a>
        </p>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Caiado Pneus",
        },
      },
    });
  };

  // Projeto 8
  const openPopupboxBardahl = () => {
    
    const content = (
        <>
          <figure>
          <img
            className="portfolio-image-popupbox"
            src={imgBardahl}
            alt="Bardahl"
            loading="lazy"
          />
          </figure>
          <p className="mt-2">
            <b>{MPortfolios.project} </b>{MPortfolios.project8.text}
          </p>
          <p>
            <b>Link: </b>
            <a
              href="/"
              className="hyper-link"
              onClick={() => window.open("https://bardahl.com.br/")}
            >
              https://bardahl.com.br/
            </a>
          </p>
        </>
      );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Bardahl",
        },
      },
    });
  } 

  return (
    <section id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-center py-5">
          {MPortfolios.title} <span className="dot">.</span>
        </h1>

        <div className="image-box-wrapper row justify-content-center mb-2">
          <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>            
            <BoxImage
              alt="Site Ri Happy"
              icon={iconSearch}
              imgSrc={imgRihappy}
              openPopupbox={openPopupboxRihappy}
            />
          </AnimationOnScroll>
          {/* - */}
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={100}
          >            
            <BoxImage
              alt="Site Vivenda do Camar??o"
              icon={iconSearch}
              imgSrc={imgVivenda}
              openPopupbox={openPopupboxVivenda}
            />
          </AnimationOnScroll>
          {/* - */}
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={200}
          >           
            <BoxImage
              alt="Site Phooto"
              icon={iconSearch}
              imgSrc={imgPhooto}
              openPopupbox={openPopupboxPhooto}
            /> 
          </AnimationOnScroll>
          {/* - */}
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={300}
          >          
            <BoxImage
              alt="Site Katmandu"
              icon={iconSearch}
              imgSrc={imgKatmandu}
              openPopupbox={openPopupboxKatmandu}
            />  
          </AnimationOnScroll>

          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={400}
          >            
            <BoxImage
              alt="Site SBED"
              icon={iconSearch}
              imgSrc={imgSbed}
              openPopupbox={openPopupboxSbed}
            />  
          </AnimationOnScroll>
          {/* - */}
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={500}
          >            
            <BoxImage
              alt="Site S??o Cristov??o"
              icon={iconSearch}
              imgSrc={imgSaoCristovao}
              openPopupbox={openPopupboxSaoCristovao}
            />  
          </AnimationOnScroll>
          {/* - */}
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={600}
          >                      
            <BoxImage
              alt="Caiado Pneus"
              icon={iconSearch}
              imgSrc={imgCaido}
              openPopupbox={openPopupboxCaiado}
            />  
          </AnimationOnScroll>
          {/* - */}
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={700}
          >
            <BoxImage
              alt="Bardahl"
              icon={iconSearch}
              imgSrc={imgBardahl}
              openPopupbox={openPopupboxBardahl}
            />          
          </AnimationOnScroll>
        </div>
      </div>
      <PopupboxContainers />
    </section>
  );
};

export default Pofrfolio;
