import React from 'react';
import './project-style.scss';
import { VscGithub } from 'react-icons/vsc';
import {BiLinkExternal} from 'react-icons/bi';
import { 
    FaNpm, FaGithub, FaJsSquare,
    FaHtml5, FaGitSquare, FaCss3Alt,
    FaNode, FaNodeJs,
} from "react-icons/fa";
import {DiMysql, DiVisualstudio, DiBootstrap} from 'react-icons/di';

const Festival4U = () => {
    return (
        <div className='project'>
            <img alt='Festival 4 U'
                className='project__header-img'
                src='https://github.com/polinetuch/portfolio_v2.0/blob/master/assets/img/along-came-polly.PNG?raw=true'
            />
            <h1>Festival 4 U</h1>
            <hr/>
            <div className='project__about'>
                <div>
                    <h2>About</h2>
                    <p>Team Project</p>
                    <p>Festival 4U links your Spotify account via its API
                        to look at your top playlist and history.
                        With returned lists of artists/songs from your Spotify
                        top playlist, the app will query Ticketmaster API to
                        search for the artists upcoming event.  
                    </p>
                    <p>My roles includes:
                        implemented on-click listeners for buttons using jQuery and
                        created a function that queried Ticketmaster API via Ajax
                    </p>
                </div>

                <div className='line'></div>

                <div>
                    <h2>Technologies Used</h2>
                    <ul>
                        <li><FaJsSquare/> Javascript</li>
                        <li><FaHtml5/> HTML</li>
                        <li><FaCss3Alt/> CSS</li>
                        <li><DiBootstrap/> Bootstrap</li>
                        <li><DiMysql/> MySQL - Sequelize</li>
                        <li><FaNpm/> NPM</li>
                        <li><FaNode/> Node JS</li>
                        <li>Ticketmaster API</li>
                        <li>Spotify API</li>
                        <li><FaGithub/> Github</li>
                        <li><FaGitSquare/> Git</li>
                        <li><DiVisualstudio/> Visual Studio Code</li>
                    </ul>
                </div>

                <div className='line'></div>

                <div className='project__links'>
                    <h2>Links</h2>
                    <ul>
                        <li><a href='https://github.com/polinetuch/Along-Came-Polly'><VscGithub/> View On Github</a></li>
                        <li><a href='https://linh0404.github.io/Along-Came-Polly/'><BiLinkExternal/>Try Here</a></li>
                    </ul>
                </div>
            </div>
            <hr/>

            <h2>Video Demo Video</h2>
            <iframe title='Festival 4U' src="https://drive.google.com/file/d/1otNJoenX9o_nAV1NV9U_mFSztVZV8kvF/preview" width="640" height="480"></iframe>
        </div>
    )
}

export default Festival4U;
