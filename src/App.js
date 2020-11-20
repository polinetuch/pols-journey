import React, {useState} from 'react';
import './App.scss';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/Navbar/SideDrawer/SideDrawer';
import Backdrop from './components/Navbar/Backdrop/Backdrop';
import Deboodle from './components/Projects/ProjectPages/Deboodle';
import NetflixClone from './components/Projects/ProjectPages/NetflixClone';
import IEnrol from './components/Projects/ProjectPages/iEnrol';
import Liri from './components/Projects/ProjectPages/Liri';
import Bamazon from './components/Projects/ProjectPages/Bamazon';
import Shutter from './components/Projects/ProjectPages/Shutter';
import BudgetApp from './components/Projects/ProjectPages/BudgetApp';
import Festival4U from './components/Projects/ProjectPages/Festival4U';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  const [openSideDrawer, setOpenSideDrawer] = useState(false);
  
  const handleOpenSideDrawer = (prevState) => {
    setOpenSideDrawer((prevState) => !prevState);
  };

  const handleBackdropClick = () => {
    setOpenSideDrawer((prevState) => !prevState)
  };

  let backdrop;
  if (openSideDrawer) {
    backdrop = <Backdrop click={handleBackdropClick}/>
  }
  
  return (
    <div className="App">
      <Router>
        <Navbar drawerClickHandler={handleOpenSideDrawer}/>
        <SideDrawer showSideDrawer={openSideDrawer}/>
        {backdrop}
        
        <Switch>
          <Route path='/deboodle'><Deboodle/></Route>
          <Route path='/netflix-clone'><NetflixClone/></Route>
          <Route path='/ienrol'><IEnrol/></Route>
          <Route path='/budget-app'><BudgetApp/></Route>
          <Route path='/liri'><Liri/></Route>
          <Route path='/bamazon'><Bamazon/></Route>
          <Route path='/shutter'><Shutter/></Route>
          <Route path='/festival-4u'><Festival4U/></Route>
          <Route path='/'><Home/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
