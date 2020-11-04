import React from 'react';
import './project-style.scss';

const Deboodle = () => {
    return (
        <div className='project'>
            <h1>Deboodle</h1>
            <hr/>
            <div className='project__about'>
                <div>
                    <p>This is a web portfolio showcasing an artist's works 
                        and illustrations
                    </p>
                </div>

                <div className='line'></div>

                <div>
                    <ul>Technologies Used
                        <li>React</li>
                        <li>Sass</li>
                        <li>Yarn</li>
                        <li>Will be deploy on Netlify</li>
                    </ul>
                </div>

                <div className='line'></div>

                <div>
                    <a href='https://github.com/polinetuch/deboodle'>View On Github</a>
                </div>
            </div>
            <iframe title='Deboodle Progress' src="https://drive.google.com/file/d/1gvVKsajI4xgLSlydxCxk67N74RuSW50v/preview" width="640" height="480"></iframe>
        </div>
    )
}

export default Deboodle;
