import React, {useState} from 'react'
import './Mainview.css'
import axios from 'axios'
import SearchResults from '../SearchResult/SearchResults';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Mainview() {

    const [searchMoviesList, setSearchMovies]  = useState(null);

    function searchMovies(e) {
        let value =  document.getElementById("search-bar").value
        let url =  `https://api.themoviedb.org/3/search/movie?api_key=01fa22077a62608ab466b3c017eba6a0&query=${value}`
        axios.get(url).then((response) => {
            console.log(response.data)
            setSearchMovies(response.data)
        })   
    }
    
    return (
        <>
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
        { searchMoviesList && <SearchResults movies_data={searchMoviesList} /> }
        <Router>
            <Route  exact path='/search'>
                
            </Route>
        </Router>
        
        </>


       
    )
}

export default Mainview
