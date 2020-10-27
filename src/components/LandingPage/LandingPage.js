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
                <h1>Hi, I'm Polinet Uch</h1>
                <p>
                    I am aspiring full stack developer, specialising
                    in Javascript based frameworks. I enjoy
                    creating and making things look nice.
                </p>        
                <p>
                    I also have a passion towards backend development.
                    The ability to pass values to functions and
                    telling it to do things for you step by step
                    is just pure automation process.
                </p>
                <p>
                    I am a very hands-on person. I love crafting.
                    I have crafted multiple items such as photoframe, 
                    a scented notebook, string board and many more.
                    This is where my imagination and creativity flows.
                </p>
            </div>
        </div>
    )
};

export default LandingPage;