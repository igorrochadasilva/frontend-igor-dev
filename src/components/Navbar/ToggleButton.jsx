import React, { useState, useEffect, useContext } from "react";
import classNames from "classnames";
import iconUsa from '../../images/flags/eua.png'
import iconBra from "../../images/flags/brasil.png";

import UserContext from "../context/AppContext";
import messages_br from "../../messages/texts-pt-br.json"
import messages_en from "../../messages/texts-en.json"

const ToggleButton = (props) => {
  const [toggle, setToggle] = useState(false);
  const { defaultChecked, onChange, disabled, className } = props;
  
  const {setState: setGlobalState} = useContext(UserContext)
    
  useEffect(() => {
    if (defaultChecked) {
      setToggle(defaultChecked);
    }
  }, [defaultChecked]);

  const triggerToggle = () => {
    if (disabled) {
      return;
    }
    console.log(toggle)
    setToggle(!toggle);
    setGlobalState({language: toggle ? 'pt-BR' : 'en-US', messages: toggle ? messages_br : messages_en})

    if (typeof onChange === "function") {
      onChange(!toggle);
    }
  };

  const toggleClasses = classNames(
    "wrg-toggle",
    {
      "wrg-toggle--checked": toggle,
      "wrg-toggle--disabled": disabled,
    },
    className
  );

  return (
    <div onClick={triggerToggle} className={toggleClasses}>
      <div className="wrg-toggle-container">
        <div className="wrg-toggle-check">
          <span>
            <img src={iconBra} alt="Portugues" loading="lazy"/>
          </span>
        </div>
        <div className="wrg-toggle-uncheck">
          <span>
            <img src={iconUsa} alt="Inglês" loading="lazy"/>
          </span>
        </div>
      </div>
      <div className="wrg-toggle-circle"></div>
      <input
        type="checkbox"
        aria-label="Toggle Button"
        className="wrg-toggle-input"
      />
    </div>
  );
};

export default ToggleButton;
