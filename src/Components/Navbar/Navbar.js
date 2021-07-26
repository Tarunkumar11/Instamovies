import React from "react";
import Navbarheading from './Navbarheading'
import NavbarList from './NavbarList'
import './Navbarcss.css'
import Filter from "../Filter/Filter";

function Navbar() {
   return (
    <nav className="navbar-bar">
        <div className="border-rd">
            <Navbarheading />
        </div>
        <div className="Navbar-items">
            <NavbarList items={[{btn:'Home', link:''}, 
                                {btn:'Watchlist', link: 'watchlist'}, 
                                {btn:'Filter',link:"#"}, 
                                {btn:'Login',link: 'login'},
                                {btn:'Logout',link: '#'}]} />
        </div>
        <Filter />
        
    </nav>
   )
}

export default Navbar;
