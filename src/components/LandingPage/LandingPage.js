import React from 'react';
import './LandingPage.scss';

const LandingPage = () => {
    return (
        <div className='landing-page__container' id='home'>
            <div  className='landing-page__image'>
                <figure>
                    <img 
                        className='landing-page__photo'
                        alt='Cartoon Of Poli'
                        src='https://github.com/polinetuch/portfolio_v2.0/blob/master/assets/img/polinetuch.jpg?raw=true'
                    />
                </figure>
            </div>
            <div className='landing-page__about-me'>
                <h1>Hello from <strong>Polinet Uch.</strong></h1>
                <hr/>
                <p>
                    I am aspiring full stack developer. I love building and finding ways
                    to make things easier with technology.
                </p>        
                <p>
                When I am not coding, you'll probably find me in my art and craft corner,
                reading more books or learning new cooking recipes.
                </p>
            </div>
        </div>
    )
};

export default LandingPage;