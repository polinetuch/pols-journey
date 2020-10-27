import React from 'react';
import './Projects.scss';
import images from './images.json';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Deboodle from './Pages/Deboodle/Deboodle';

const Projects = () => {
    const showProjectItems = images.map((imgElement, index) => {
        return (
            <figure className='projects__figure-element' key={index} >
                <img
                    className='projects__item-image'
                    alt={imgElement.name}
                    src={imgElement.image}
                />
                <figcaption>{imgElement.name}</figcaption>
                <Link to='/'>View</Link>
            </figure>
        )
    });
    return (
        <Router>
            <div className='projects__container' id='projects'>
                <h1>Projects I have built...</h1>
                <div className='projects__cards'>
                    {showProjectItems}
                </div>
                <Switch>
                    <Route exact path='/' component={Deboodle}/>
                </Switch>
            </div>
        </Router>
    )
}

export default Projects;