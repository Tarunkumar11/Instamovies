import React from 'react'
import MovieCard from '../Trending/MovieCard'
import './SingleMovie.css'
import Popularity from './Popularity'
function SingleMovie() {
    const singleMovieData = {"backdrop_path":"/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg","title":"Black Widow","genre_ids":[28,12,53],"original_language":"en","original_title":"Black Widow","poster_path":"/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg","video":false,"vote_average":8.2,"overview":"Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.","id":497698,"vote_count":2209,"release_date":"2021-07-07","adult":false,"popularity":9790.858,"media_type":"movie"}
    return (
        <div>
            <div className="single-movie-container">
                <section className="primary-section">
                    <div className="primary-section-left">
                        <MovieCard singleMovieData={singleMovieData}/>
                    </div>

                    <div className="primary-section-right">

                        <div className="content-box">
                            <div className="movie-type">   
                                <h2>Movie Name</h2>
                            </div>
                            <div className="gener">
                                <div className="tv-14">
                                    <p>tv-14</p>
                                </div>
                                <ul>
                                    <li>Drama</li>
                                    <li>Romance</li>
                                    <li>43m</li>
                                    
                                </ul>
                            </div>
                        </div>

                        <div className="for-user">
                            <div className="movie-popularity">
                                <Popularity />
                                <p>User Score</p>
                            </div>

                            <ul>
                                <li>Add to list</li>
                                <li>Like</li>
                                <li>Watch</li>
                            </ul>
                        </div>
                    </div>
                    

                </section>
            </div>
        </div>
    )
}

export default SingleMovie
