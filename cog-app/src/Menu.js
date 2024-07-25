import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch, Routes, Link} from "react-router-dom";


const Menu = () => {
    const stringPrefix = "/cogstudios.github.io"
    return (
        <div className="menu">

            <Link to={stringPrefix+"/"} className='menuitem' >Home</Link>
            <Link to={stringPrefix+"/about"} className="menuitem">About</Link>
            <Link to = {stringPrefix+"/playtest"} className="menuitem">Playtest</Link>
            <Link to={stringPrefix+"/contact"} className="menuitem">Contact</Link>
        
        </div>
    );
  }
  
  export default Menu;