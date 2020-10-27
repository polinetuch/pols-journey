import React from 'react';
import './SideDrawer.scss';

const SideDrawer = (props) => {
    let drawerClasses = 'side-drawer';

    if (props.showSideDrawer) {
        drawerClasses = 'side-drawer open'
    }
    return (
        <div>
        <nav className={drawerClasses}>
            <ul>
                <li><a href='/#home' target='_blank'>Home</a></li>
                <li><a href='/#my-skills' target='_blank'>Skills</a></li>
                <li><a href='/#projects' target='_blank'>Projects</a></li>
                <li><a href='/#contact' target='_blank'>Contact</a></li>
            </ul>
        </nav>
        </div>
    )
};

export default SideDrawer;