import React, {useState} from 'react'
import './Mainview.css'
import axios from 'axios'
import SearchResults from '../SearchResult/SearchResults';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Mainview() {

    const [searchMoviesList, setSearchMovies]  = useState(null);

    function searchMovies(e) {
        let value =  document.getElementById("search-bar").value
        let url =  `https://api.themoviedb.org/3/search/company?api_key=01fa22077a62608ab466b3c017eba6a0&query=${value}`
        axios.get(url).then((response) => {
            setSearchMovies(response.data)
        })   
    }
    
    let temp = [{"id":119224,"logo_path":null,"name":"Black Balance","origin_country":"CZ"},{"id":6600,"logo_path":null,"name":"Black Orange","origin_country":"GR"},{"id":67458,"logo_path":"/hhm8hZnBHSVIKkLxnwTkk6q6B1n.png","name":"Black Market","origin_country":"US"},{"id":97484,"logo_path":null,"name":"Black Sparrow","origin_country":"FR"},{"id":148279,"logo_path":null,"name":"black box","origin_country":""},{"id":6890,"logo_path":"/txnrtmc6n9HTv68jBptMoN9NZzs.png","name":"Black Ice","origin_country":"US"},{"id":85527,"logo_path":null,"name":"Black Lamb","origin_country":""},{"id":103625,"logo_path":null,"name":"Black Beach","origin_country":""},{"id":74369,"logo_path":null,"name":"Black María","origin_country":""},{"id":84250,"logo_path":null,"name":"Black Boxers","origin_country":""},{"id":121730,"logo_path":null,"name":"Black X","origin_country":""},{"id":48328,"logo_path":null,"name":"Black Robe","origin_country":""},{"id":21612,"logo_path":null,"name":"Black Snake","origin_country":""},{"id":87532,"logo_path":null,"name":"Black Pills","origin_country":""},{"id":112699,"logo_path":null,"name":"Black Sheep","origin_country":""},{"id":2175,"logo_path":null,"name":"Black Chrome","origin_country":""},{"id":133251,"logo_path":null,"name":"Ballet Black","origin_country":""},{"id":15337,"logo_path":null,"name":"Black Soup","origin_country":""},{"id":9968,"logo_path":null,"name":"Black Flag","origin_country":""},{"id":3091,"logo_path":null,"name":"Black Hole","origin_country":""}]
    useState(temp)   
    
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
            { searchMoviesList && <SearchResults movies_data={searchMoviesList} /> }
        </div>

        <Router>
            <Route  exact path='/search'>
                
            </Route>
        </Router>
        
        </>


       
    )
}

export default Mainview
