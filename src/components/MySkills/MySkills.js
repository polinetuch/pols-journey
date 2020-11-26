import React from 'react';
import './MySkills.scss';
import images from './image.json';
import Slide from 'react-reveal/Slide';

const MySkills = () => {

    const showAllImages = images.map((project, index) => {
        return (
            <figure key={index}>
                <Slide left>
                    <img className='my-skills__img-element' src={project.image} alt={project.name}/>
                    <figcaption>{project.name}</figcaption>
                </Slide>
            </figure>
        );
    })
    return (
        <div className='my-skills__container' id='my-skills'>
            <h1>Technical Skills</h1>
            <hr/>
            <div className='my-skills__div'>
                <div className='my-skills__gif'>
                    <figure>
                        <img src='https://data.whicdn.com/images/319350573/original.gif' alt='Typing On Keyboard'/>
                    </figure>
                </div>
                <div className='my-skills__images'>
                    {showAllImages}
                </div>
            </div>
            <a href='#projects' className='my-skills__btn'>View My Projects</a>
        </div>
    )
};

export default MySkills;