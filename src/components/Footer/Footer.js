import React from 'react';
import './Footer.scss';
import { FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';

const Footer = () => {
    return (
        <div className='footer__container' id='contact'>
            <div className='footer__contact'>
                <h1>Let's Talk!</h1>
                <hr/>
                <figure>
                    <img src='https://www.kindpng.com/picc/m/712-7126978_transparent-teamwork-clipart-work-team-cartoon-png-png.png' alt='Teamwork'/>                
                </figure>
                <p>Email: uchpolinet@gmail.com</p>
                <p>Mobile: 0423 833 438</p>
                
                <ul className='footer__social-media'>
                    <li><a href='https://github.com/polinetuch'><VscGithub/></a></li>
                    <li><a href='https://www.linkedin.com/in/polinetuch/'><FaLinkedin/></a></li>
                    <li><a href='https://twitter.com/polinetuch'><FaTwitterSquare/></a></li>
                </ul>
                
            </div>
        </div>

    )
};

export default Footer;