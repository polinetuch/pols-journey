import React from 'react';
import './Contact.scss';
import { FcCellPhone, FcFeedback } from 'react-icons/fc';

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <ul className='contact__lists'>
                <li><FcCellPhone className='contact__icon'/> 0423 833 438</li>
                <li><FcFeedback className='contact__icon'/> uchpolinet@gmail.com</li>
            </ul>  
        </div>
        
    )
}
export default Contact;