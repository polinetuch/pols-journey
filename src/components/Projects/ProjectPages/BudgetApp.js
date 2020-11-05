import React from 'react';
import './project-style.scss';
import { VscGithub } from 'react-icons/vsc';
import {BiLinkExternal} from 'react-icons/bi';

const BudgetApp = () => {
    return (
        <div className='project'>
            <h1>Budget App</h1>
            <hr/>
            <div className='project__about'>
                <div>
                    <h2>About</h2>
                    <p>Keep track of your incomes and expenses.
                    </p>
                </div>

                <div className='line'></div>

                <div>
                    <h2>Technologies Used</h2>
                    <ul>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
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
