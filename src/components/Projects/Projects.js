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
                <figcaption>{project.name}</figcaption>
                <Link to={project.url}>View</Link>
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