import React from 'react';
import './LandingPage.scss';

const LandingPage = () => {
    return (
        <div className='landing-page__container'>
            <div className='landing-page__text'>
                <h1>Polinet Uch</h1>
                <p>a full stack developer</p>
            </div>
            <div className='landing-page__social-media'>
                <a href='https://www.linkedin.com/in/polinetuch/'>
                    <img 
                        className='landing-page__linkedin'
                        src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/linkedin-512.png'
                        alt='linked-in'
                    />
                </a>

                <a href='https://github.com/polinetuch'>
                    <img 
                        className='landing-page__github'
                        src='https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png'
                        alt='github'
                    />
                </a>
            </div>
        </div>
    )
};

export default LandingPage;