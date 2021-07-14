import React from "react";
import Navbarheading from './Navbarheading'
import NavbarList from './NavbarList'
import './Navbarcss.css'

function Navbar() {
   return (
    <nav className="navbar-bar">
        <div className="border-rd">
            <Navbarheading />
        </div>
        <NavbarList items={['Home', 'Watchlist','Login']} />
    </nav>
   )
}

export default Navbar;
