import React from "react";
// import netflix from "../images/netflix.png";
// import cityGuide from "../images/city-guide-app.png";
// import portfolio from "../images/portfolio.png";
// import taskManager from "../images/task-manager.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
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

const Pofrfolio = () => {
  // Projeto 1
  const openPopupboxRihappy = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={imgRihappy}
          alt="Rihappy"
          loading="lazy"
        />
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

  const popupboxConfigRihappy = {
    titleBar: {
      enable: true,
      text: "Ri Happy",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // projeto 2
  const openPopupboxVivenda = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={imgVivenda}
          alt="Vivenda do Camarão"
          loading="lazy"
        />
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

  const popupboxConfigVivenda = {
    titleBar: {
      enable: true,
      text: "Vivenda do Camarão",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //projeto 3
  const openPopupboxPhooto = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={imgPhooto}
          alt="Phooto"
          loading="lazy"
        />
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

  const popupboxConfigPhooto = {
    titleBar: {
      enable: true,
      text: "Loja Phooto",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Projeto 4
  const openPopupboxKatmandu = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={imgKatmandu}
          alt="Katmandu"
          loading="lazy"
        />
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

  const popupboxConfigKatmandu = {
    titleBar: {
      enable: true,
      text: "Katmandu",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Projeto 5
  const openPopupboxSbed = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={imgSbed} alt="SBED" loading="lazy" />
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

  const popupboxConfigSbed = {
    titleBar: {
      enable: true,
      text: "SBED",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Projeto 6
  const openPopupboxSaoCristovao = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={imgSaoCristovao}
          alt="São Cristovão"
          loading="lazy"
        />
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

  const popupboxConfigSaoCristovao = {
    titleBar: {
      enable: true,
      text: "São Cristovão",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Projeto 7
  const openPopupboxCaiado = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={imgCaido}
          alt="Caido Pneus"
          loading="lazy"
        />
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

  const popupboxConfigCaiado = {
    titleBar: {
      enable: true,
      text: "Caiado Pneus",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Projeto 8
  const openPopupboxBardahl = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={imgBardahl}
          alt="Bardahl"
          loading="lazy"
        />
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
  };

  const popupboxConfigBardahl = {
    titleBar: {
      enable: true,
      text: "Bardahl",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-center py-5">
          Portfolio <span className="dot">.</span>
        </h1>

        <div className="image-box-wrapper row justify-content-center mb-2">
          <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
            <div className="portfolio-image-box" onClick={openPopupboxRihappy}>
              <img
                className="portfolio-image"
                src={imgRihappy}
                alt="Netflix Clone Project..."
                width="200px"
                height="120px"
                loading="lazy"
              />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
          </AnimationOnScroll>
          {/* - */}
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={100}
          >
            <div className="portfolio-image-box" onClick={openPopupboxVivenda}>
              <img
                className="portfolio-image"
                src={imgVivenda}
                alt="City Guide Project..."
                width="200px"
                height="120px"
                loading="lazy"
              />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
          </AnimationOnScroll>
          {/* - */}
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={200}
          >
            <div className="portfolio-image-box" onClick={openPopupboxPhooto}>
              <img
                className="portfolio-image"
                src={imgPhooto}
                alt="Portfolio React and Material UI Project..."
                width="200px"
                height="120px"
                loading="lazy"
              />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
          </AnimationOnScroll>
          {/* - */}
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={300}
          >
            <div className="portfolio-image-box" onClick={openPopupboxKatmandu}>
              <img
                className="portfolio-image"
                src={imgKatmandu}
                alt="Task Manager React and Redux Project..."
                width="200px"
                height="120px"
                loading="lazy"
              />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
          </AnimationOnScroll>

          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={400}
          >
            <div className="portfolio-image-box" onClick={openPopupboxSbed}>
              <img
                className="portfolio-image"
                src={imgSbed}
                alt="Site SBED"
                width="200px"
                height="120px"
                loading="lazy"
              />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
          </AnimationOnScroll>
          {/* - */}
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={500}
          >
            <div
              className="portfolio-image-box"
              onClick={openPopupboxSaoCristovao}
            >
              <img
                className="portfolio-image"
                src={imgSaoCristovao}
                alt="Site São Cristovão"
                width="200px"
                height="120px"
                loading="lazy"
              />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
          </AnimationOnScroll>
          {/* - */}
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={600}
          >
            <div className="portfolio-image-box" onClick={openPopupboxCaiado}>
              <img
                className="portfolio-image"
                src={imgCaido}
                alt="Caiado Pneus"
                width="200px"
                height="120px"
                loading="lazy"
              />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
          </AnimationOnScroll>
          {/* - */}
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={700}
          >
            <div className="portfolio-image-box" onClick={openPopupboxBardahl}>
              <img
                className="portfolio-image"
                src={imgBardahl}
                alt="Bardahl"
                width="200px"
                height="120px"
                loading="lazy"
              />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
          </AnimationOnScroll>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigRihappy} />
      <PopupboxContainer {...popupboxConfigVivenda} />
      <PopupboxContainer {...popupboxConfigPhooto} />
      <PopupboxContainer {...popupboxConfigKatmandu} />
      <PopupboxContainer {...popupboxConfigSbed} />
      <PopupboxContainer {...popupboxConfigSaoCristovao} />
      <PopupboxContainer {...popupboxConfigCaiado} />
      <PopupboxContainer {...popupboxConfigBardahl} />
    </div>
  );
};

export default Pofrfolio;
