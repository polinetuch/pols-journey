import React from 'react';
import './project-style.scss';
import { VscGithub } from 'react-icons/vsc';

const Bamazon = () => {
    return (
        <div className='project'>
            <h1>Bamazon</h1>
            <hr/>
            <div className='project__about'>
                <div>
                    <h2>About</h2>
                    <p>Bamazon is an Amazon-like storefront, 
                        which takes in orders from costumers and 
                        deplete stock from the store's inventory.
                    </p>
                </div>

                <div className='line'></div>

                <div>
                    <h2>Technologies Used</h2>
                    <ul>
                        <li>Javascript</li>
                        <li>Node</li>
                        <li>MySQL - Sequelize</li>
                        <li>NPM</li>
                    </ul>
                </div>

                <div className='line'></div>

                <div className='project__links'>
                    <h2>Links</h2>
                    <ul>
                        <li><a href='https://github.com/polinetuch/bamazon'><VscGithub/> View On Github</a></li>
                    </ul>
                </div>
            </div>
            <hr/>

            <h2>View Video</h2>
            <iframe title='Bamazon' src="https://drive.google.com/file/d/1oDVxg81vCoEv0pI5_87zURSVYV7w-_zJ/preview" width="640" height="480"></iframe>
        </div>
    )
}

export default Bamazon;
