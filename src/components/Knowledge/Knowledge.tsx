import React from "react";

//images
import iconReact from "../../images/logos/icon-react.svg";
import iconHtml from "../../images/logos/icon-html5.svg";
import iconJavascript from "../../images/logos/icon-javascript.svg";
import iconCss from "../../images/logos/icon-css3.svg";

import iconNode from "../../images/logos/icon-node.svg";
import iconJquery from "../../images/logos/icon-jquery.svg";
import iconGit from "../../images/logos/icon-git.svg";
import iconSass from "../../images/logos/icon-sass.svg";

import iconTypescript from "../../images/logos/icon-typescript.svg";
import iconWordpress from "../../images/logos/icon-wordpress.svg";
import iconVtex from "../../images/logos/icon-vtex.svg";
import iconWebpack from "../../images/logos/icon-webpack.svg";

// import iconRedux from "../../images/logos/icon-redux.svg";
// import iconGatsby from "../../images/logos/icon-gatsby.svg";
// import iconNext from "../../images/logos/icon-next.svg";
// import iconGraphql from "../../images/logos/icon-graphql.svg";

import { AnimationOnScroll } from "react-animation-on-scroll";

const Knowledge: React.FC = () => {
  return (
    <div id="knowledge" className="knowledge">
      <h1>
        Conhecimentos <span className="dot">.</span>
      </h1>
      <div className="container">
        <div className="row justify-content-around cards">
          <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
            <div className="cardBox">
              <div className="cardBox__icon">
                <img src={iconReact} alt="React" width="100px" height="100px" loading="lazy"/>
              </div>
              <div className="cardBox__title">
                <p>React</p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={100}
          >
            <div className="cardBox">
              <div className="cardBox__icon">
                <img src={iconCss} alt="Css3" width="100px" height="100px" loading="lazy"/>
              </div>
              <div className="cardBox__title">
                <p>Css3</p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={200}
          >
            <div className="cardBox">
              <div className="cardBox__icon">
                <img src={iconHtml} alt="Html" width="100px" height="100px" loading="lazy"/>
              </div>
              <div className="cardBox__title">
                <p>Html5</p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={300}
          >
            <div className="cardBox">
              <div className="cardBox__icon">
                <img
                  src={iconJavascript}
                  alt="Javascript"
                  width="100px"
                  height="100px"
                  loading="lazy"
                />
              </div>
              <div className="cardBox__title">
                <p>Javascript</p>
              </div>
            </div>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
            <div className="cardBox">
              <div className="cardBox__icon">
                <img src={iconNode} alt="Node" width="100px" height="100px" loading="lazy"/>
              </div>
              <div className="cardBox__title">
                <p>Node</p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={100}
          >
            <div className="cardBox">
              <div className="cardBox__icon">
                <img
                  src={iconJquery}
                  alt="Jquery"
                  width="100px"
                  height="100px"
                  loading="lazy"
                />
              </div>
              <div className="cardBox__title">
                <p>Jquery</p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={200}
          >
            <div className="cardBox">
              <div className="cardBox__icon">
                <img src={iconGit} alt="Git" width="100px" height="100px" loading="lazy"/>
              </div>
              <div className="cardBox__title">
                <p>Git</p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={300}
          >
            <div className="cardBox">
              <div className="cardBox__icon">
                <img src={iconSass} alt="Sass" width="100px" height="100px" loading="lazy"/>
              </div>
              <div className="cardBox__title">
                <p>Javascript</p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
            <div className="cardBox">
              <div className="cardBox__icon">
                <img
                  src={iconTypescript}
                  alt="Typescript"
                  width="100px"
                  height="100px"
                  loading="lazy"
                />
              </div>
              <div className="cardBox__title">
                <p>Typescript</p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={100}
          >
            <div className="cardBox">
              <div className="cardBox__icon">
                <img
                  src={iconWordpress}
                  alt="Wordpress"
                  width="100px"
                  height="100px"
                  loading="lazy"
                />
              </div>
              <div className="cardBox__title">
                <p>Wordpress</p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={200}
          >
            <div className="cardBox">
              <div className="cardBox__icon">
                <img src={iconVtex} alt="Vtex" width="100px" height="100px" loading="lazy"/>
              </div>
              <div className="cardBox__title">
                <p>Vtex</p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            animateOnce={true}
            delay={300}
          >
            <div className="cardBox">
              <div className="cardBox__icon">
                <img
                  src={iconWebpack}
                  alt="Webpack"
                  width="100px"
                  height="100px"
                  loading="lazy"
                />
              </div>
              <div className="cardBox__title">
                <p>Webpack</p>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
