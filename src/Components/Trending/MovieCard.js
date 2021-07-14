import React from 'react'
import './MovieCard.css'
import cardImage from 'C:/Users/sagar/Desktop/Instamovie/instamovies/src/images/background.png'
const navigate = "#"
function MovieCard() {
    return (
        <div className="container">
            <div className="movie-card">
                <div className="img-box">
                    <img src={cardImage} alt="cardImage" />
                </div>
                <div className="content">
                    <div className="content-box">
                        <h3>Avenger endgame</h3>
                    </div>

                    <ul className="sci">
                        <li style={{"--i":1}}><a href={navigate}><i className="far fa-star">Rating</i></a></li>
                        <li style={{"--i":2}}><a href={navigate}><i className="far fa-heart">Like</i></a></li>
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
