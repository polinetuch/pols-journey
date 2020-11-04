import React from 'react';
import './project-style.scss';
import { VscGithub } from 'react-icons/vsc';

const Liri = () => {
    return (
        <div className='project'>
            <h1>Liri Node App</h1>
            <hr/>
            <div className='project__about'>
                <div>
                    <h2>About</h2>
                    <p>A liri node command line interface that listens to your command.
                    </p>
                </div>

                <div className='line'></div>

                <div>
                    <h2>Technologies Used</h2>
                    <ul>
                        <li>Javascript</li>
                        <li>Node JS</li>
                        <li>Spotify API</li>
                        <li>Bands In Town API</li>
                        <li>OMDB API</li>
                    </ul>
                </div>

                <div className='line'></div>

                <div className='project__links'>
                    <h2>Links</h2>
                    <ul>
                        <li><a href='https://github.com/polinetuch/liri-node-app'><VscGithub/> View On Github</a></li>
                    </ul>
                </div>
            </div>
            <hr/>

            <h2>View Video</h2>
            <iframe title='Liri' src="https://drive.google.com/file/d/1y62ypoMBCahtv95oe0Ot9adFsQMeJPSN/preview" width="640" height="480"></iframe>        </div>
    )
}

export default Liri;
