import React from 'react';
import './Footer.scss';
import { FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';

const Footer = () => {
    return (
        <div className='footer__container' id='contact'>
            <div className='footer__contact'>
                <figure>
                    <img src='https://media1.giphy.com/media/3kwdmXOdvGPbTBxFb7/source.gif' alt='Teamwork'/>                
                </figure>
                <hr/>
                <div className='footer__row'>
                    <div className='footer__row-contact'>
                        <p>Email: uchpolinet@gmail.com</p>
                        <p>Mobile: 0423 833 438</p>
                        <ul className='footer__social-media'>
                            <li><a href='https://github.com/polinetuch'><VscGithub/></a></li>
                            <li><a href='https://www.linkedin.com/in/polinetuch/'><FaLinkedin/></a></li>
                            <li><a href='https://twitter.com/polinetuch'><FaTwitterSquare/></a></li>
                        </ul>
                        <p className='footer__copyright'>Made by Polinet Uch 2020</p>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Footer;