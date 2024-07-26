import './App.css';

import {BrowserRouter as Router, Route, Switch, Routes, Link} from "react-router-dom";
import About from './About.js';
import Home from './Home.js';
import Menu from './Menu.js';
import Playtest from './Playtest.js';
import Contact from './Contact.js';
import Footer from './Footer.js';

function App() {
  const stringPrefix = "/cogstudios.github.io"
  return (
    <div>
      
    <Router>
    <header className="App-header">
          <Link to={stringPrefix+"/"} className="title"><img className="coglogo" src="images/coglogo.png" alt="COG Studios Inc"></img></Link>
          <div className="menu"><Menu></Menu></div>
        </header>
      <Routes>
        <Route path={stringPrefix+"/about"} Component={About}/>
        <Route path={stringPrefix+"/playtest"} Component={Playtest} />
        <Route path={stringPrefix+"/contact"} Component={Contact} />
        <Route path={stringPrefix+"/"} Component={Home}/>
        
        <Route path="/*" Component={Home}/>    
      </Routes>
    </Router>
    

    </div>
  );
}

export default App;
