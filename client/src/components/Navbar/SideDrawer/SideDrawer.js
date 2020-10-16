import React from 'react';
import './SideDrawer.scss';

const SideDrawer = (props) => {
    let drawerClasses = 'side-drawer';

    if (props.showSideDrawer) {
        drawerClasses = 'side-drawer__open'
    }
    return (
        <nav className={drawerClasses}>
            <ul className='side-drawer__lists'>
                <li><a href='/#home'>Home</a></li>
                <li><a href='/#about'>About</a></li>
                <li><a href='/#skills'>Skills</a></li>
                <li><a href='/#projects'>Projects</a></li>
                <li><a href='/#contact'>Contact</a></li>
            </ul>
        </nav>
    )
};

export default SideDrawer;