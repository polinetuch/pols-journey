import React from 'react';
import './MySkills.scss';
import images from './image.json';

const MySkills = () => {
    const showAllImages = images.map((imgElement, index) => {
        return (
            <figure>
                <img className='my-skills__img-element' src={imgElement.image} key={index} alt={imgElement.name}/>
                <figcaption>{imgElement.name}</figcaption>
            </figure>
        )
    })
    return (
        <div className='my-skills__container' id='my-skills'>
            <h1>Technical Skills</h1>
            <div className='my-skills__images'>
                {showAllImages}
            </div>
        </div>
    )
};

export default MySkills;