import React from 'react';
import About from './Sections/About/About';
import './Resume.scss';
import Education from './Sections/Education/Education';
import Experience from './Sections/Experience/Experience';

const Resume = () => {
    return (
        <div className='container' id='border'>
            <h1>Resume</h1>
            <About/>
            <div className='container__exp-edu'>
                <div className='container__exp'><Experience/></div>
                <div className='container__edu'><Education/></div>
            </div>
        </div>
    )
}

export default Resume;
