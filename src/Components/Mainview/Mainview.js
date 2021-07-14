import React from 'react'
import './Mainview.css'
function Mainview() {
    return (
        <div className="center-view">
            <div className="center-text" >
                <h2>
                <span>Welcome to Instamovies.</span>
                Now you can search your favourite movie and explore.
                </h2>
            </div>
            
            <div className="search-bar">
                <input type="text" placeholder="Search your favourite movies" />
                <input className="search-btn"  type="submit" placeholder="Search" />
            </div>
        </div>
    )
}

export default Mainview
