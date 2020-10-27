import React from 'react';
import './Footer.scss';
import Contact from '../Contact/Contact';
import { FcHome, FcList, FcFile } from 'react-icons/fc';

const Footer = () => {
    return (
        <div className='footer__container'>
            <div className='footer__navigation'>
                <ul className='footer__navigation-list'>
                    <li><a href='/#home'><FcHome className='footer__icon'/> Home</a></li>
                    <li><a href='/#my-skills'><FcList className='footer__icon'/> Skills</a></li>
                    <li><a href='/#projects'><FcFile className='footer__icon'/> Projects</a></li>
                </ul>
            </div>
            <div>
                <Contact/>
            </div>
            {/* <div className='footer__social-media'>
                <a href='https://www.linkedin.com/in/polinetuch/'>
                    <img 
                        className='footer__icon'
                        src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/linkedin-512.png'
                        alt='linked-in'
                    />
                </a>

                <a href='https://github.com/polinetuch'>
                    <img 
                        className='footer__icon'
                        src='https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png'
                        alt='github'
                    />
                </a>
            </div> */}
        </div>

    )
};

export default Footer;