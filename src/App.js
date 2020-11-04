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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
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
          <Route path='/ienrol'><IEnrol/></Route>
          <Route path='/netflix-clone'><NetflixClone/></Route>
          <Route path='/liri'><Liri/></Route>
          <Route path='/'><Home/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
