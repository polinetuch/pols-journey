import React from 'react';
import './project-style.scss';
import { VscGithub } from 'react-icons/vsc';
import {BiLinkExternal} from 'react-icons/bi';
import { 
    FaNpm, FaGithub, FaJsSquare,
    FaHtml5, FaGitSquare, FaNode,
    FaCss3Alt
} from "react-icons/fa";
import {DiMysql, DiHeroku, DiVisualstudio} from 'react-icons/di';

const Shutter = () => {
    return (
        <div className='project'>
            <img alt='Shutter'
                className='project__header-img'
                src='https://github.com/polinetuch/portfolio_v2.0/blob/master/assets/img/shutter.PNG?raw=true'
            />
            <h1>Shutter</h1>
            <hr/>
            <div className='project__about'>
                <div>
                    <h2>About</h2>
                    <p>Team Project</p>
                    <p>A project to help photographers share images and recieve credits.</p>
                    <ul>
                        The app used structured query language to create tables that stores
                        <li>User's login details</li>
                        <li>Uploaded images to a url</li>
                        <li>Credits for images that are liked</li>
                    </ul>
                    <p>My role was to utilised Sequelize to 
                        do CRUD on MySQL database for users to 
                        upload/delete images and store user’s logging 
                        information
                    </p>
                </div>

                <div className='line'></div>

                <div>
                    <h2>Technologies Used</h2>
                    <ul>
                        <li><FaJsSquare/> Javascript</li>
                        <li><FaHtml5/> HTML</li>
                        <li><FaCss3Alt/> CSS</li>
                        <li><FaNode/>Node JS</li>
                        <li><FaNpm/> NPM</li>
                        <li><DiMysql/> MySQL - Sequelize</li>
                        <li>Travis CI</li>
                        <li>JWT - Jason Web Token</li>
                        <li>Restful API</li>
                        <li><DiHeroku/> Heroku</li>
                        <li><FaGitSquare/> Git</li>
                        <li><FaGithub/> Github</li>
                        <li><DiVisualstudio/> Visual Studio Code</li>
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
