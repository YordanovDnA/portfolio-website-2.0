import React, {useState} from 'react';
import { Switch, Route } from "react-router-dom";
import HamburgerMenuIcon from './components/hamburgerMenuIcon';
import HamburgerMenu from "./components/hamburgerMenu";
import NavBar from './components/navBar';
import ProfileSection from './components/profileSecion';
import Page404 from './components/404page';
import HomePage from './components/homePage';
import AboutMe from './components/aboutMe';
import Resume from './components/resume';
import Portfilio from './components/portfolio';
import Project from './components/project';
import Blog from './components/blog';
import Contact from './components/contact';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [open, setOpen] = useState(false);

  let style = {
    display: "none",
  }
  if(open){
    style.display = "block";
  }else{
    style.display = "none"
  }
  

  return (
    <React.Fragment>
      
  
      <div style={{height: "100vh"}} className="row">
        <ToastContainer/>
  
        <NavBar/>
  
        <div className="profileSection">
          <ProfileSection/>
        </div>
  
        {/* Main section */}
  
        <div className="main col">
  
          <div style={style} className="hamburgerMenuWrapper">
            <HamburgerMenu setOpen={setOpen} />
          </div>
  
          <div className="hamburgerMenuIcon">
            <HamburgerMenuIcon
                isOpen={open}
                menuClicked={()=>setOpen(!open)}
                width={30}
                height={20}
                strokeWidth={1}
                rotate={0}
                color='white'
                borderRadius={0}
                animationDuration={0.5}
              />
          </div>
          
          <Switch>
            <Route path="/project/:id" component={Project} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
            <Route path="/portfolio" component={Portfilio} />
            <Route path="/resume" component={Resume} />
            <Route path="/aboutMe" component={AboutMe} />
            <Route path="/" exact component={HomePage}/>
            <Route path="*" component={Page404} />
          </Switch>
  
        </div>
        <div style={{height: "3vh"}} className="footer col-12 text-center bg-dark text-secondColor"
            
          >
            2020 - This website is developed with React.
          </div>
      </div>
    </React.Fragment>
  );
}

export default App;
