import React from 'react';
import './project-style.scss';
import { VscGithub } from 'react-icons/vsc';
import {BiLinkExternal} from 'react-icons/bi';

const NetflixClone = () => {
    return (
        <div className='project'>
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
                    <h2>Technologies Used</h2>
                    <ul>
                        <li>React</li>
                        <li>NPM</li>
                        <li>The Movie Database API</li>
                        <li>Firebase</li>
                        <li>React Youtube Player NPM</li>
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

            <h2>View Video</h2>
            <iframe title='Netflix Clone' src="https://drive.google.com/file/d/1Vb_FiaKUYVi0C2XhYuX-DFlh3RXs3d--/preview" width="640" height="480"></iframe>
        </div>
    )
};

export default NetflixClone;
