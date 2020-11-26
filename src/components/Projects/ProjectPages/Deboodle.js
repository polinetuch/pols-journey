import React from 'react';
import './project-style.scss';
import { VscGithub } from 'react-icons/vsc';
import { 
    FaReact, FaSass, FaYarn, 
    FaNpm, FaGithub, FaJsSquare,
    FaHtml5, FaGitSquare
} from "react-icons/fa";
import { AiFillCloud } from "react-icons/ai";
import {DiVisualstudio} from 'react-icons/di';

const Deboodle = () => {
    return (
        <div className='project'>
            <div className='project__title'>
                <img alt='Deboodle' 
                    className='project__header-img'
                    src='https://github.com/polinetuch/deboodle/blob/main/client/public/logo.JPG?raw=true'/>
                <h1>Deboodle</h1>
                <p className='project__title-p'>Currently in progress...</p>
            </div>
            <hr/>
            <div className='project__about'>
                <div>
                    <h2>About</h2>
                    <p>This is a web portfolio that I have individually volunteered to build
                        an artist in order to showcase the artist's works and illustrations.
                    </p>
                </div>

                <div className='line'></div>

                <div>
                    <h2>Technologies & Tools</h2>
                    <ul>
                        <li><FaJsSquare/> JavaScript</li>
                        <li><FaReact/> React</li>
                        <li><FaHtml5/> HTML</li>
                        <li><FaSass/> Sass</li>
                        <li><FaYarn/> Yarn</li>
                        <li><FaNpm/> NPM</li>
                        <li><FaGithub/> Github</li>
                        <li><DiVisualstudio/> Visual Studio Code</li>
                        <li><FaGitSquare/> Git</li>
                        <li><AiFillCloud/> Will be deploy on Netlify</li>
                    </ul>
                </div>

                <div className='line'></div>

                <div className='project__links'>
                    <h2>Links</h2>
                    <ul>
                        <li><a href='https://github.com/polinetuch/deboodle'><VscGithub/> View On Github</a></li>
                    </ul>
                </div>
            </div>
            <hr/>

            <h2>View Progress Video</h2>
            <iframe title='Deboodle' src="https://drive.google.com/file/d/1cHG04t_PKSahBumi9mrLJzYcR-Xi6z5W/preview" width="640" height="480"></iframe>
        </div>
    )
}

export default Deboodle;
