import React from 'react';
import {Link} from "react-router-dom";
function Navbarheading() {
    return (
        <div className="heading-text">
        
            <h2> <Link to={{ pathname:"/"}}>InstaMovies</Link> </h2>
        </div>
    )
}

export default  Navbarheading;