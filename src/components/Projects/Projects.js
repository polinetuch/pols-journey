import React from 'react';
import './Projects.scss';
import skills from './skills.json';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
  
const Projects = () => {
    const showProjectItems = skills.map((project, index) => {
        return (
            <figure className='projects__figure-element' key={index} >
                    <img
                        className='projects__item-image'
                        alt={project.name}
                        src={project.image}
                    />
                    <figcaption>
                        <h3>{project.name}</h3>
                        <Link className='projects__link' to={project.url}>View</Link>
                    </figcaption>
            </figure>
        )
    });
    return (
        <div className='projects__container' id='projects'>
                <h1>Projects</h1>
                <hr/>
                <p>These are the projects I have built individually and as a team.
                    Please click VIEW to read more about each of the project.
                </p>
                <div className='projects__cards'>
                    {showProjectItems}
                </div>
            </div>
    )
}

export default Projects;