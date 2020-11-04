import React from 'react';
import './Footer.scss';
import { FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';

const Footer = () => {
    return (
        <div className='footer__container' id='contact'>
            <div className='footer__img'>
                <figure>
                    <img src='https://www.kindpng.com/picc/m/712-7126978_transparent-teamwork-clipart-work-team-cartoon-png-png.png' alt='Teamwork'/>                
                </figure>
            </div>
            <div className='footer__contact'>
                <h1>Let's Talk!</h1>
                <hr/>
                <p>Email: uchpolinet@gmail.com</p>
                <p>Mobile: 0423 833 438</p>
                
                <ul className='footer__social-media'>
                    <li><a href='https://github.com/polinetuch'><VscGithub/></a></li>
                    <li><a href='https://www.linkedin.com/in/polinetuch/'><FaLinkedin/></a></li>
                    <li><a href='https://twitter.com/polinetuch'><FaTwitterSquare/></a></li>
                </ul>
                
            </div>

            {/* <div className='footer__navigation'>
                <ul className='footer__navigation-list'>
                    <li><a href='/#home'><FcHome className='footer__icon'/> Home</a></li>
                    <li><a href='/#my-skills'><FcList className='footer__icon'/> Skills</a></li>
                    <li><a href='/#projects'><FcFile className='footer__icon'/> Projects</a></li>
                </ul>
            </div>
            <div>
                <Contact/>
            </div> */}
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