import React from 'react';
import './App.scss';
import LandingPage from './components/LandingPage/LandingPage';
import MySkills from './components/MySkills/MySkills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <div className="App">
      <LandingPage/>
      <MySkills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
