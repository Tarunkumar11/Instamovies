import React from 'react'
import './Mainview.css'
function Mainview() {

    function searchMovies(e) {
        
        let value =  document.getElementById("search-bar").value
        console.log(value)
        
    }
    return (
        <div className="center-view">
            <div className="center-text" >
                <h2>
                <span>Welcome to Instamovies.</span>
                Now you can search your favourite movie and explore.
                </h2>
            </div>
            
            <div className="search-bar">
                <input type="text" id="search-bar" placeholder="Search your favourite movies" />
                <input className="search-btn" onClick={searchMovies} type="submit" placeholder="Search" />
            </div>
        </div>
    )
}

export default Mainview
