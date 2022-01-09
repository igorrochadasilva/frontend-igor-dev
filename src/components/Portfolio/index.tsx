import React from "react";

// FONTAWESOME IMPORTS
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

// REACT POPUPBOX
import { PopupboxManager} from "react-popupbox";
import PopupboxContainers from "./PopupboxContainer"
import "react-popupbox/dist/react-popupbox.css";

import { AnimationOnScroll } from "react-animation-on-scroll";

import imgRihappy from "../../images/projects/rihappy/home.png";
import imgVivenda from "../../images/projects/vivenda-do-caramao/home.png";
import imgPhooto from "../../images/projects/phooto/home.png";
import imgKatmandu from "../../images/projects/katmandu/home.png";

import imgSbed from "../../images/projects/sbed/home.png";
import imgSaoCristovao from "../../images/projects/sao-cristovao/home.png";
import imgCaido from "../../images/projects/caiado-pneus/home.png";
import imgBardahl from "../../images/projects/bardahl/home.png";

import BoxImage from "./BoxImage";

const Pofrfolio = () => {
  
  
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
          <b>Projeto: </b>Loja de brinquedos Rihappy.
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
          alt="Vivenda do Camarão"
          loading="lazy"
        />
        </figure>
        <p className="mt-2">
          <b>Projeto: </b>Loja Vivenda do Camarão.
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
          text: "Vivenda do Camarão",
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
          <b>Projeto: </b>Loja Phooto.
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
          <b>Projeto: </b>Loja Katmandu.
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
          <b>Projeto: </b>Site SBED.
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
          alt="São Cristovão"
          loading="lazy"
        />
        </figure>
        <p className="mt-2">
          <b>Projeto: </b>Site São Cristovão.
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
          text: "São Cristovão",
        },
      },
    });
  };

  // Projeto 7
  const openPopupboxCaiado = () => {
      console.log('Open Popup sem o cara')
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
          <b>Projeto: </b>Loja Caido Pneus.
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
    console.log('Open Popup com usecallback')
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
            <b>Projeto: </b>Site Bardahl.
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
          Portfolio <span className="dot">.</span>
        </h1>

        <div className="image-box-wrapper row justify-content-center mb-2">
          <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>            
            <BoxImage
              alt="Site Ri Happy"
              icon={faSearchPlus}
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
              alt="Site Vivenda do Camarão"
              icon={faSearchPlus}
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
              icon={faSearchPlus}
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
              icon={faSearchPlus}
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
              icon={faSearchPlus}
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
              alt="Site São Cristovão"
              icon={faSearchPlus}
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
              icon={faSearchPlus}
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
              icon={faSearchPlus}
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
