import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {IconDefinition } from '@fortawesome/free-solid-svg-icons';


interface IService{
    icon: IconDefinition
    title: string
    text: string
}

const Service: React.FC <IService> = ({icon, title, text}) => {
    
    return(
        <div className='box'>
            <div className='circle'>
                <FontAwesomeIcon
                    className='icon'
                    icon={icon}
                    size='2x'
                />
            </div>
            <h3>{title}</h3>
            <p>
                {text}
            </p>
        </div>
    )
}

export default Service