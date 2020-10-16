import React from 'react';
import './Hamburger.scss';

const Hamburger = (props) => {
    return (
        <button className='hamburger__button' onClick={props.click}>
            <div className='hamburger__line'></div>
            <div className='hamburger__line'></div>
            <div className='hamburger__line'></div>
        </button>
    )
}

export default Hamburger;