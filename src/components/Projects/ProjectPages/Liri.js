import React from 'react';
import './project-style.scss';
import { VscGithub } from 'react-icons/vsc';
import { 
    FaMusic, FaSpotify, 
    FaGitSquare, FaGithub, FaJsSquare,
    FaNode, FaFilm
} from "react-icons/fa";
import {DiVisualstudio} from 'react-icons/di';

const Liri = () => {
    return (
        <div className='project'>
            <img alt='Liri Node App'
                className='project__header-img'
                src='https://pbs.twimg.com/profile_images/985996945926668288/Mn028Iql.jpg'
            />
            <h1>Liri Node App</h1>
            <hr/>
            <div className='project__about'>
                <div>
                    <h2>About</h2>
                    <p>LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, 
                        LIRI is a Language Interpretation and Recognition Interface. 
                        LIRI will be a command line node app that takes in parameters and gives you back data.
                    </p>
                </div>

                <div className='line'></div>

                <div>
                    <h2>Technologies Used</h2>
                    <ul>
                        <li><FaJsSquare/> Javascript</li>
                        <li><FaNode/> Node JS</li>
                        <li><FaSpotify/> Spotify API</li>
                        <li><FaMusic/> Bands In Town API</li>
                        <li><FaFilm/> OMDB API</li>
                        <li><FaGithub/> Github</li>
                        <li><FaGitSquare/> Git</li>
                        <li><DiVisualstudio/> Visual Studio Code</li>
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
            <div className='project__about'>
                <h4>How to use:</h4>
                <ul> Type node liri.js then run one of the following commands, then add search text:
                    <li>concert-this</li>
                    <li>spotify-this-song</li>
                    <li>movie-this</li>
                    <li>do-what-it-says</li>
                </ul>
            </div>
            <hr/>

            <h2>View Video</h2>
            <iframe title='Liri' src="https://drive.google.com/file/d/1y62ypoMBCahtv95oe0Ot9adFsQMeJPSN/preview" width="640" height="480"></iframe>        </div>
    )
}

export default Liri;
