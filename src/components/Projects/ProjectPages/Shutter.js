import React from 'react';
import './project-style.scss';
import { VscGithub } from 'react-icons/vsc';
import {BiLinkExternal} from 'react-icons/bi';

const Shutter = () => {
    return (
        <div className='project'>
            <h1>Shutter</h1>
            <hr/>
            <div className='project__about'>
                <div>
                    <h2>About</h2>
                    <p>A project to help photographers share images and recieve credits.
                    </p>
                </div>

                <div className='line'></div>

                <div>
                    <h2>Technologies Used</h2>
                    <ul>
                        <li>Javascript</li>
                        <li>Node JS</li>
                        <li>NPM</li>
                        <li>MySQL - Sequelize</li>
                        <li>Travis CI</li>
                        <li>JWT - Jason Web Token</li>
                        <li>Restful API</li>
                        <li>Heroku</li>
                    </ul>
                </div>

                <div className='line'></div>

                <div className='project__links'>
                    <h2>Links</h2>
                    <ul>
                        <li><a href='https://github.com/polinetuch/Shutter'><VscGithub/> View On Github</a></li>
                        <li><a href='https://shutter-bootcamp.herokuapp.com/'><BiLinkExternal/>Try Here</a></li>
                    </ul>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default Shutter;
