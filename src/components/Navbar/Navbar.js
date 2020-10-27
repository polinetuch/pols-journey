import React from 'react';
import './Navbar.scss';
import Hamburger from './Hamburger/Hamburger';

const Navbar = (props) => {
    return (
        <div className='navigation'>
            <nav className='navigation__navbar'>
                <div className='navigation__hamburger'>
                    <Hamburger click={props.drawerClickHandler}/>
                </div>
                <div>
                    <h1 className='navigation__btn'>
                        <a href='/#home' target='_blank'>Polinet Uch</a>
                    </h1>
                </div>
                <div className='navigation__space'/>
                <div className='navigation__navbar-items'>
                    <ul>
                        <li><a href='/#home' target='_blank'>Home</a></li>
                        <li><a href='/#my-skills' target='_blank'>Skills</a></li>
                        <li><a href='/#projects' target='_blank'>Projects</a></li>
                        <li><a href='/#contact' target='_blank'>Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;