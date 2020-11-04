import React from 'react';
import './project-style.scss';
import { VscGithub } from 'react-icons/vsc';
import {BiLinkExternal} from 'react-icons/bi';

const iEnrol = () => {
    return (
        <div className='project'>
            <h1>iEnrol</h1>
            <hr/>
            <div className='project__about'>
                <div>
                    <h2>About</h2>
                    <p>This web app log parents' information of their children in a child care.
                    </p>
                </div>

                <div className='line'></div>

                <div>
                    <h2>Technologies Used</h2>
                    <ul>
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React Super Responsive Table</li>
                    </ul>
                </div>

                <div className='line'></div>

                <div className='project__links'>
                    <h2>Links</h2>
                    <ul>
                        <li><a href='https://github.com/polinetuch/iEnrol'><VscGithub/> View On Github</a></li>
                        {/* <li><a href='https://netflix-clone-310da.web.app/'><BiLinkExternal/>Try Here</a></li> */}
                    </ul>
                </div>
            </div>
            <hr/>

            {/* <h2>View Progress Video</h2> */}
            {/* <iframe title='Deboodle Progress' src="https://drive.google.com/file/d/1gvVKsajI4xgLSlydxCxk67N74RuSW50v/preview" width="640" height="480"></iframe> */}
        </div>
    )
}

export default iEnrol;
