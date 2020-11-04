import React from 'react';
import './Projects.scss';
import skills from './skills.json';

const Projects = () => {
    const showProjectItems = skills.map((imgElement, index) => {
        return (
            <figure className='projects__figure-element' key={index} >
                <img
                    className='projects__item-image'
                    alt={imgElement.name}
                    src={imgElement.image}
                />
                <figcaption>{imgElement.name}</figcaption>
                <a href={imgElement.url}>View</a>
            </figure>
        )
    });
    return (
        <div className='projects__container' id='projects'>
                <h1>Projects</h1>
                <hr/>
                <div className='projects__cards'>
                    {showProjectItems}
                </div>
            </div>
    )
}

export default Projects;