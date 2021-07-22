import React from 'react'
import MovieCard from '../Trending/MovieCard'
import './searchResult.css'
import {Link} from "react-router-dom";

function SearchResults(props) {
    
    return (
        <div className="result">
            <div className="container-result">
                <div className="movie-type">   
                    <h2>Searched Result</h2>
                </div>
                <div className="search-result">
                    {
                        props.movies_data.results.map((moviedata) => {
                            return <Link to={{ pathname: `/movie/${moviedata.id}/${moviedata.title.split(" ").join("-")}`}}
                                            key = {moviedata.id} ><MovieCard  singleMovieData= {moviedata}/></Link>
                        })

                    }
                </div>
            </div>
        </div>
    )
}

export default SearchResults
