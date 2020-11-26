import React from 'react';
import './Navbar.scss';
import Hamburger from './Hamburger/Hamburger';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className='navigation'>
            <nav className='navigation__navbar'>
                <div className='navigation__hamburger'>
                    <Hamburger click={props.drawerClickHandler}/>
                </div>
                <div>
                    <h1 className='navigation__btn'>
                        <a href='/#home'>Polinet Uch</a>
                    </h1>
                </div>
                <div className='navigation__space'/>
                <div className='navigation__navbar-items'>
                    <ul>
                        <li><a href='/#home'>Home</a></li>
                        <li><a href='/#my-skills'>Skills</a></li>
                        <li><a href='/#projects'>Projects</a></li>
                        <li><a href='/#contact'>Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;