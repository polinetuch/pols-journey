import React, {useState} from 'react';
import './App.scss';
import LandingPage from './components/LandingPage/LandingPage';
import MySkills from './components/MySkills/MySkills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/Navbar/SideDrawer/SideDrawer';
import Backdrop from './components/Navbar/Backdrop/Backdrop';

const App = () => {
  const [openSideDrawer, setOpenSideDrawer] = useState(false);
  
  const handleOpenSideDrawer = () => {
    setOpenSideDrawer((prevState) => !prevState);
  };

  const handleBackdropClick = () => {
    setOpenSideDrawer(false)
  };

  let backdrop;
  if (openSideDrawer) {
    backdrop = <Backdrop click={handleBackdropClick}/>
  }
  
  return (
    <div className="App">
      <Navbar drawerClickHandler={handleOpenSideDrawer}/>
      <SideDrawer showSideDrawer={openSideDrawer}/>
      {backdrop}
      <LandingPage/>
      <MySkills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
