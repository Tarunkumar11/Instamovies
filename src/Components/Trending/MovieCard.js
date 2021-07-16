import React from 'react'
import './MovieCard.css'
import cardImage from 'C:/Users/sagar/Desktop/Instamovie/instamovies/src/images/background.png'
const navigate = "#"
function MovieCard(props) {
    const prefix = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2"
    console.log(props)
    return (
        <div className="container">
            <div className="movie-card">
                <div className="img-box">
                    <img src={ prefix + props.singleMovieData.poster_path} alt="cardImage" />
                </div>
                <div className="content">
                    <div className="content-box">
                        <h3>{props.singleMovieData.original_title}</h3>
                    </div>

                    <ul className="sci">
                        <li style={{"--i":1}}><a href={navigate}><i className="far fa-star">{ props.singleMovieData.vote_average}</i></a></li>
                        <li style={{"--i":3}}>{ props.singleMovieData.release_date}</li>
                        <li style={{"--i":2}}><a href={navigate}><i className="far fa-heart">{props.singleMovieData.vote_count}</i></a></li>
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
