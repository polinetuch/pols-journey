import React from 'react';
import './project-style.scss';
import { VscGithub } from 'react-icons/vsc';
import {BiLinkExternal} from 'react-icons/bi';

const Festival4U = () => {
    return (
        <div className='project'>
            <h1>Festival 4 U</h1>
            <hr/>
            <div className='project__about'>
                <div>
                    <h2>About</h2>
                    <p>Linking to Spotify’s API to look at your playlist and history 
                        Requires signing in Linking to Ticketmaster, 
                        EventBrite, Ticketek Looking up events based on your playlist
                    </p>
                </div>

                <div className='line'></div>

                <div>
                    <h2>Technologies Used</h2>
                    <ul>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>MySQL - Sequelize</li>
                        <li>NPM</li>
                        <li>Ticketmaster API</li>
                        <li>Spotify API</li>
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
        </div>
    )
}

export default Festival4U;
