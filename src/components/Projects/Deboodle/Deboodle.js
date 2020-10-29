import React from 'react';
import './Deboodle.scss';
import { SiJavascript, SiReact, SiYarn, SiNpm, SiStorybook, SiJest, SiNetlify } from 'react-icons/si';
import {FaSass} from 'react-icons/fa';

const Deboodle = () => {

    return (
        <div className='project__container' id='deboodle'>
            <h1>Deboodle</h1>
            <div className='project__about'>
                <h2>About The App</h2>
                <p>This is a web portfolio with a small functionality 
                    that allows customers to place in their order 
                    details on their desired design of cards/illustrations.
                </p>
            </div>
            
            <div className='project__view'>
                <iframe src="https://drive.google.com/file/d/1gvVKsajI4xgLSlydxCxk67N74RuSW50v/preview" width="640" height="480" title='progress'>Progress</iframe>
            </div>

            <div className='project__tech'>
                <h2>Technologies Used</h2>
                    <ul>
                        <li><SiJavascript/>Javascript</li>
                        <li><SiReact/>React</li>
                        <li><FaSass/>Sass</li>
                        <li><SiYarn/>Yarn</li>
                        <li><SiNpm/>Node Package Management</li>
                        <li><SiStorybook/>React Storybook</li>
                        <li><SiJest/>Jest</li>
                        <li><SiNetlify/>Netlify</li>
                    </ul>
            </div>
        </div>
    )
}

export default Deboodle;