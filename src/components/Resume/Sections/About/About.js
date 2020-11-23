import React from 'react';
import './About.scss';
import { FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';

const About = () => {
    return (
        <div className='container'>

            <div className='container__about'>
                <div>
                    <figure>
                        <img src='https://cdn1.vectorstock.com/i/1000x1000/09/10/person-gray-photo-placeholder-woman-vector-23250910.jpg' alt='avatar'/>
                    </figure>
                    <h1>Polinet Uch</h1>
                    <h3>Full stack developer</h3>

                    <p>A full stack developer with hands-on experience
                        working with Javascript based frameworks, integrating
                        databases and hosting applications in the clouds.
                        Looking to further extend on current skills and be a 
                        part of a passionate developer team.
                    </p>
                </div>

                <div className='container__contact'>
                    <address>
                        <a href='mailto:uchpolinet@gmail.com'>uchpolinet@gmail.com</a>
                        <br/>
                        <a href='tel:0423 833 438'>0423 833 438</a>
                        <br/>
                        Clayton South, Melbourne
                        <br/>
                    </address>

                    <ul className='container__social-media'>
                        <li><a href='https://github.com/polinetuch'><VscGithub/></a></li>
                        <li><a href='https://www.linkedin.com/in/polinetuch/'><FaLinkedin/></a></li>
                        <li><a href='https://twitter.com/polinetuch'><FaTwitterSquare/></a></li>
                    </ul>
                </div>
            </div>

            <div>

            </div>
        </div>
    )
}

export default About;
