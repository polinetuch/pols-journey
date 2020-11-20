import React, { useState } from 'react';
import './MySkills.scss';
import images from './image.json';

const MySkills = () => {

    const showAllImages = images.map((project, index) => {
        return (
            <figure key={index}>
                <img className='my-skills__img-element' src={project.image} alt={project.name}/>
                <figcaption>{project.name}</figcaption>
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
        </div>
    )
};

export default MySkills;