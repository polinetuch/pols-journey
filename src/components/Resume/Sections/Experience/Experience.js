import React from 'react';
import './Experience.scss';

const Experience = () => {
    return (
        <>
            <h1>Experience</h1>
            <div className='container__experience'>
                <h3>Web Developer</h3>
                <time>July 2020 - November 2020</time>
                <ul>
                    <li>Built reusable UI components with React JS utilising modern features including hooks & ES6</li>
                    <li>Implemented code based on design (wireframe)</li>
                    <li>Queried MongoDB Atlas Database to save users’ details</li>
                    <li>Extracted value from a third party API and forwarded to a custom Express server</li>
                    <li>Retrieved users’ details and used React state to store and display on the frontend</li>
                    <li>Learnt CORS to enable HTTP methods when app runs on a different port & nesting in SASS</li>
                    <li>Utilised Universally Unique Identifier (UUID) Node Package Management to generate code</li>
                </ul>
            </div>

            <div className='container__experience'>
                <h3>Kindergarten Teacher</h3>
                <time>July 2017 - January 2020</time>
                <ul>
                    <li>Responsible for a team of three with a class of 18 children and coached students on placement</li>
                    <li>Worked with the team to gather data to identify goals and strategies in order to design learningcontents </li>
                    <li>Used summative assessment to analyse the progress weekly</li>
                    <li>Built positive relationships with customers and the team via ongoing/follow-up communication</li>
                    <li>Identify areas of professional development by attending workshops and conferences</li> 
                    <li>used self-reflection strategy for personal development and knowledge sharing during meetings</li>
                </ul>
            </div>

            <div className='container__experience'>
                <h3>Customer Service: Sandwich Artist</h3>
                <time>January 2015 - April 2017</time>
                <ul>
                    <li>Food preparation & actively listened to and addressed customers’ needs and dietary requirement</li>
                    <li>Maintained positive and calm manner when dealing with challenging customers and situations</li>
                </ul>
            </div>
        </>
    )
}

export default Experience;
