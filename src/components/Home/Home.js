import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import MySkills from '../MySkills/MySkills';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';

function Home() {
    return (
        <div>
            <LandingPage/>
            <MySkills/>
            <Projects/>
            <Footer/>
        </div>
    )
}

export default Home
