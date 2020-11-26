import React from 'react';
import './project-style.scss';
import { VscGithub } from 'react-icons/vsc';
import { 
    FaNode, FaNpm, FaGithub, 
    FaJsSquare, FaGitSquare,
} from "react-icons/fa";
import {DiVisualstudio, DiMysql} from 'react-icons/di';

const Bamazon = () => {
    return (
        <div className='project'>
            <img alt='Bamazon'
                className='project__header-img'
                src='https://caseyferguson.dev/assets/images/Bamazon.jpg'
            />
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
                        <li><FaJsSquare/> Javascript</li>
                        <li><DiMysql/> MySQL - Sequelize</li>
                        <li><FaNpm/> NPM</li>
                        <li><FaNode/> Node</li>
                        <li><FaGithub/> Github</li>
                        <li><FaGitSquare/> Github</li>
                        <li><DiVisualstudio/> Visual Studio Code</li>
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

            <div className='project__about'>
            <h4>How it works:</h4>
                    <ol>
                        <li>The app prompts users with two messages:
                            to enter product ID and quantity
                        </li>
                        <li>User's input will then contact the Bamazon MySQL database</li>
                        <li>User can also view the information of product that matches their selected ID and quantity</li>
                        <li>Total price of the order is calculated</li>
                        <li>The quantity of the products get purchased will be updated in the database</li>
                    </ol>
            </div>
            <hr/>

            <h2>View Video</h2>
            <iframe title='Bamazon' src="https://drive.google.com/file/d/1oDVxg81vCoEv0pI5_87zURSVYV7w-_zJ/preview" width="640" height="480"></iframe>
        </div>
    )
}

export default Bamazon;
