import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IImages {
    imgSrc: string
    alt: string
    openPopupbox: () => void
    icon: IconDefinition
}

const BoxImage: React.FC <IImages> = ({imgSrc, alt, openPopupbox, icon}) => (

    <div className="portfolio-image-box" onClick={openPopupbox}>
        <figure>
            <img
                className="portfolio-image"
                src={imgSrc}
                alt={alt}
                width="200px"
                height="120px"                
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={icon} />
        </figure>
    </div>
)

export default BoxImage