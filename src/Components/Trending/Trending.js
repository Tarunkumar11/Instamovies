import React from 'react'
import MovieCard from './MovieCard'
import './Trending.css'
import {Link} from "react-router-dom";


function Trending(props) {
    
    return (
        <div className="trending-section">
            <div className="trending-movies">
                <div className="movie-type">   
                    <h2>{props.data.title}</h2>
                </div>
                <div className="movie-card">
                    {
                        props.data.movies_data.map((moviedata) => {
                            const idOfMovie = moviedata.id
                            return <Link to={{ 
                                            pathname: `/singlemovie/${moviedata.title}`, 
                                            moviedata: {moviedata},
                                            id : {idOfMovie}
                                            }
                                            }
                                            key = {moviedata.id} ><MovieCard  singleMovieData= {moviedata}/></Link>
                        })
                    }
                </div>
            </div>  
        </div>
    )
}

export default Trending

