import React from 'react'
// import author from '../../images/me.jpg';
import iconMe from '../../images/iconMe.svg'
import LazyLoad from 'react-lazyload';

const Picture: React.FC = () => (
    <div className='col-lg-6 col-xm-12'>
        <div className='photo-wrap mt-5'>
            <figure>
                <LazyLoad height={255}>
                    <img
                        className='profile-img'
                        src={iconMe}
                        alt='Igor Rocha'
                        width='417'
                        height='255px'
                        loading="lazy"
                    />
                </LazyLoad>
            </figure>
        </div>
    </div>
)

export default Picture