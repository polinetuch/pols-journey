import React from 'react';
import './project-style.scss';
import { VscGithub } from 'react-icons/vsc';
import {BiLinkExternal} from 'react-icons/bi';
import { 
    FaGithub, FaJsSquare, FaHtml5, 
    FaCss3, FaGitSquare
} from "react-icons/fa";
import {DiVisualstudio} from 'react-icons/di';

const BudgetApp = () => {
    return (
        <div className='project'>
            <img alt='Budget App' className='project__header-img' src='/budget-app.jpg'/>
            <h1>Budget App</h1>
            <hr/>
            <div className='project__about'>
                <div>
                    <h2>About</h2>
                    <p>An individual project that I have built to showcase
                        my ability working with Javascript. This app allows you
                        to keep track of your expenses and income. It can total
                        both your income and expense whilst at the same time, showing
                        the percentage.
                    </p>
                </div>

                <div className='line'></div>

                <div>
                    <h2>Technologies & Tools</h2>
                    <ul>
                        <li><FaJsSquare/> Javascript</li>
                        <li><FaHtml5/> HTML</li>
                        <li><FaCss3/> CSS</li>
                        <li><FaGithub/> Github</li>
                        <li><FaGitSquare/> Git</li>
                        <li><DiVisualstudio/> Visual Studio Code</li>
                    </ul>
                </div>

                <div className='line'></div>

                <div className='project__links'>
                    <h2>Links</h2>
                    <ul>
                        <li><a href='https://github.com/polinetuch/budget-app'><VscGithub/> View On Github</a></li>
                        <li><a href='https://polinetuch.github.io/budget-app/'><BiLinkExternal/>Try Here</a></li>
                    </ul>
                </div>

            </div>
            <hr/>

            <h2>View Demo Video</h2>
            <iframe title='Budget App' src="https://drive.google.com/file/d/1CiHiKTZ9zVXyDYoxDDI4KLCRYCB_koTJ/preview" width="640" height="480"></iframe>
        </div>
    )
}

export default BudgetApp;
