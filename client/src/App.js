import React from 'react';
import './App.scss';
import LandingPage from './components/LandingPage/LandingPage';
import MySkills from './components/MySkills/MySkills';

const App = () => {
  return (
    <div className="App">
      <LandingPage/>
      <MySkills/>
    </div>
  );
}

export default App;
