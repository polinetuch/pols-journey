import React from 'react';
import './project-style.scss';
import { VscGithub } from 'react-icons/vsc';
import {BiLinkExternal} from 'react-icons/bi';
import { 
    FaReact, FaNpm, FaGithub, 
    FaJsSquare,FaCss3Alt, FaDatabase, 
    FaFilm, FaHtml5, FaGitSquare
} from "react-icons/fa";
import { AiFillCloud } from "react-icons/ai";
import {DiVisualstudio} from 'react-icons/di';

const NetflixClone = () => {
    return (
        <div className='project'>
            <img alt='Netflix Clone' 
                className='project__header-img'
                src='https://www.zilliondesigns.com/blog/wp-content/uploads/feature-img-min-1280x720.png'/>
            <h1>Netflix Clone</h1>
            <hr/>
            <div className='project__about'>
                <div>
                    <h2>About</h2>
                    <p>A clone frontend project of Netflix that was built with React and queried 
                        The Movie Database API.
                    </p>
                </div>

                <div className='line'></div>

                <div>
                    <h2>Technologies & Tools</h2>
                    <ul>
                        <li><FaReact/> React</li>
                        <li><FaHtml5/> HTML</li>
                        <li><FaCss3Alt/> CSS</li>
                        <li><FaJsSquare/> Javascript</li>
                        <li><FaNpm/> NPM</li>
                        <li><FaGithub/> Github</li>
                        <li><FaGitSquare/> Git</li>
                        <li><FaDatabase/> The Movie Database API</li>
                        <li><AiFillCloud/> Firebase</li>
                        <li><FaFilm/> React Youtube Player NPM</li>
                        <li><DiVisualstudio/> Visual Studio Code</li>
                    </ul>
                </div>

                <div className='line'></div>

                <div className='project__links'>
                    <h2>Links</h2>
                    <ul>
                        <li><a href='https://github.com/polinetuch/netflix-clone'><VscGithub className='projects__icons'/> View On Github</a></li>
                        <li><a href='https://netflix-clone-310da.web.app/'><BiLinkExternal className='projects__icons'/>  Try Here</a></li>
                    </ul>
                </div>
            </div>
            <hr/>

            <h2>View Demo Video</h2>
            <iframe
                title='Netflix Clone' 
                src="https://drive.google.com/file/d/1Vb_FiaKUYVi0C2XhYuX-DFlh3RXs3d--/preview" 
                width="640" 
                height="480"/>
        </div>
    )
};

export default NetflixClone;
