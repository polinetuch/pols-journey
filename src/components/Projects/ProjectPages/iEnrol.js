import React from 'react';
import './project-style.scss';
import { VscGithub } from 'react-icons/vsc';
import { 
    FaReact, FaNpm, FaGithub, 
    FaJsSquare,FaCss3Alt, FaDatabase, 
    FaRoute, FaHtml5, FaNode,
    FaGitSquare
} from "react-icons/fa";
import {DiVisualstudio} from 'react-icons/di';

const iEnrol = () => {
    return (
        <div className='project'>
            <img alt='iEnrol'
                className='project__header-img'
                src='https://github.com/polinetuch/portfolio_v2.0/blob/master/assets/img/ienrol.gif?raw=true'
            />
            <h1>iEnrol</h1>
            <hr/>
            <div className='project__about'>
                <div>
                    <h2>About</h2>
                    <p>This web app log parents' information of their children in a child care.
                    </p>
                </div>

                <div className='line'></div>

                <div>
                    <h2>Technologies Used</h2>
                    <ul>
                        <li><FaReact/> React</li>
                        <li><FaJsSquare/> JavaScript</li>
                        <li><FaRoute/> React Router</li>
                        <li><FaHtml5/> HTML</li>
                        <li><FaCss3Alt/> CSS</li>
                        <li><FaNpm/> React Super Responsive Table NPM</li>
                        <li><FaNpm/> NPM</li>
                        <li><FaNode/> Node JS</li>
                        <li><FaGithub/> Github</li>
                        <li><FaGitSquare/> Git</li>
                        <li><FaDatabase/> MongoDB</li>
                        <li><DiVisualstudio/> Visual Studio Code</li>
                    </ul>
                </div>

                <div className='line'></div>

                <div className='project__links'>
                    <h2>Links</h2>
                    <ul>
                        <li><a href='https://github.com/polinetuch/iEnrol'><VscGithub/> View On Github</a></li>                    </ul>
                </div>
            </div>
            <hr/>

            <div>
                    <img
                        className='project__img-list' 
                        alt='iEnrol 1'
                        src='https://github.com/polinetuch/portfolio_v2.0/blob/master/assets/img/ienrol03.PNG?raw=true'
                    />
                    <img
                        className='project__img-list' 
                        alt='iEnrol 2'
                        src='https://github.com/polinetuch/portfolio_v2.0/blob/master/assets/img/ienrol04.PNG?raw=true'
                    />
                    <img
                        className='project__img-list' 
                        alt='iEnrol 3'
                        src='https://github.com/polinetuch/portfolio_v2.0/blob/master/assets/img/ienrol05.PNG?raw=true'
                    />
                    <img
                        className='project__img-list' 
                        alt='iEnrol 4'
                        src='https://github.com/polinetuch/portfolio_v2.0/blob/master/assets/img/ienrol06.PNG?raw=true'
                    />
                    <img
                        className='project__img-list' 
                        alt='iEnrol 5'
                        src='https://github.com/polinetuch/portfolio_v2.0/blob/master/assets/img/ienrol07.PNG?raw=true'
                    />
            </div>
        </div>
    )
}

export default iEnrol;
