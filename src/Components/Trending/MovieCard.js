import React from 'react'
import './MovieCard.css'
// import cardImage from '../../images/background.png'
// const navigate = "#"
function MovieCard(props) {
    const prefix = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2"
    
    return (
        <div className="container">
            <div className="movie-card" style={props.boxshadow?props.boxshadow:{}}>
                <div className="img-box">
                    <img src={ prefix + props.singleMovieData.poster_path} alt="cardImage" />
                </div>
                <div className="content">
                    <div className="content-box">
                        <h3>{props.singleMovieData.original_title}</h3>
                    </div>

                    <ul className="sci">
                        <li style={{"--i":1}}>
                            <i className="far fa-star"></i>
                            <p>{ props.singleMovieData.vote_average}</p>
                        </li>

                        <li style={{"--i":3}}>
                            <p>{ props.singleMovieData.release_date}</p>
                        </li>
                        
                        <li style={{"--i":2}}>
                            <i className="far fa-heart"></i>
                            <p>{props.singleMovieData.vote_count}</p>
                        </li>
                    </ul>

                    <div className="watch-list">
                        <input type="submit" value="WatchList+" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
