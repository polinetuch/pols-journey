import React from 'react';
import './Projects.scss';
import images from './images.json';

const Projects = () => {
    const showProjectItems = images.map((imgElement, index) => {
        return (
            <figure className='projects__figure-element'>
                <img
                    className='projects__item-image'
                    key={index} 
                    alt={imgElement.name}
                    src={imgElement.image}
                />
                <figcaption>{imgElement.name}</figcaption>
                <a href='/'>View</a>
            </figure>
      
        )
    })
    return (
        <div className='projects__container'>
            <h1>Projects I have built...</h1>
            <div className='projects__cards'>
                {showProjectItems}
            </div>
        </div>
    )
}

export default Projects;