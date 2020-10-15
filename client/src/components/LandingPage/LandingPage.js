import React from 'react';
import './LandingPage.scss';

const LandingPage = () => {
    return (
        <div className='landing-page__container'>
            <div className='landing-page__text'>
                <h1>Polinet Uch</h1>
                <p>a full stack developer</p>
            </div>
            {/* <div className='landing-page__poli-photo'>
                <figure>
                    <img 
                        alt='Cartoon Of Poli'
                        src='https://i.pinimg.com/564x/8a/ca/bb/8acabb3b884174af4ad45815271f4e6f.jpg'
                    />
                </figure>
            </div> */}
        </div>
    )
};

export default LandingPage;