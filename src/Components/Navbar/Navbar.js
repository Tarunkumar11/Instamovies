import React from "react";
import Navbarheading from './Navbarheading'
import NavbarList from './NavbarList'
import './Navbarcss.css'
import Filter from "../Filter/Filter";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Navbar() {
   return (
    <nav className="navbar-bar">
        <div className="border-rd">
            <Navbarheading />
        </div>
        <div className="Navbar-items">
            <NavbarList items={['Home', 'Watchlist', 'Filter', 'Login']} />
        </div>
        <Filter />
        {/* <Router>
            <Route exact path='/filter'> 
                
            </Route>
        </ Router> */}
        
    </nav>
   )
}

export default Navbar;
