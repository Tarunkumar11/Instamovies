import React from 'react'
import MovieCard from './MovieCard'
import './Trending.css'
import {Link} from "react-router-dom";


function Trending(props) {
    
    // console.log(props)

    return (
        <div className="trending-section">
            <div className="trending-movies">
                <div className="movie-type">   
                    <h2>{props.data.title}</h2>
                </div>
                <div className="movie-card">
                    {
                        props.data.movies_data.map((moviedata) => {
                            return <Link to={{ 
                                            pathname: `/singlemovie/${moviedata.title}`, 
                                            temp : "tesginfdsf asdfkasldfjas;kldfjs",
                                            moviedata: {moviedata}
                                            
                                            }
                                            }
                                            
                                            params = {moviedata}

                                            key = {moviedata.id} ><MovieCard  singleMovieData= {moviedata}/></Link>
                        })
                    }
                </div>
            </div>  
        </div>
    )
}

export default Trending

