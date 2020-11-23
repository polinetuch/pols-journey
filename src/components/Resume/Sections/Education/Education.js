import React from 'react';
import './Education.scss';

const Education = () => {
    return (
        <>
            <h1>Education & Training</h1>
            <div className='container__education'>
                <ul>
                    <li><h3>Full Stack Web Development Program</h3></li>
                    <li><time>June 2019 - November 2019</time></li>
                    <li>Monash University</li>
                </ul>
                {/* <ul>
                    <li>Worked as a team to plan, build and design web applications</li>
                    <li>Used Kanban for project management and created web pages from scratch using HTML, CSS, Javascript and React</li>
                    <li>Learnt Git and used it to manage code changes in all projects</li>
                    <li>Queried data from MySQL database and NoSQL data in MongoDB</li>
                    <li>Implemented Mocha and Chai Js for testing</li>
                </ul> */}
            </div>

            <div className='container__education'>
                <ul>
                    <li><h3>Bachlor of Early Childhood Teaching</h3></li>
                    <li><time>January 2014 - November 2017</time></li>
                    <li>Holmesglen Institute of TAFE</li>
                </ul>
                {/* <ul>
                    <li>Conducted a <a href='https://drive.google.com/file/d/1yWHDGbErwD-Ai21V8fDXOMqds88pEb2A/view'>research</a> on the effective of using technology in helping second language learners</li>
                    <li>Obtained an understanding of summative assessment and its benefits</li>
                    <li>Acquired the practical and theoretical knowledge in leadership and relationship building</li>
                </ul> */}
            </div>
            
        </>
    )
}

export default Education;
