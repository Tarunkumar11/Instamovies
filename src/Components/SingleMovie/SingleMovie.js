import React from 'react'
import MovieCard from '../Trending/MovieCard'
import './SingleMovie.css'
import Popularity from './Popularity'
import Cast from './Cast'
import Recommendation from './Recommendation'

function SingleMovie() {
    const singleMovieData = {"backdrop_path":"/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg","title":"Black Widow","genre_ids":[28,12,53],"original_language":"en","original_title":"Black Widow","poster_path":"/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg","video":false,"vote_average":8.2,"overview":"Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.","id":497698,"vote_count":2209,"release_date":"2021-07-07","adult":false,"popularity":9790.858,"media_type":"movie"}
    const playVedio = ""
    return (
        <div>
            <div className="single-movie-container">
                <div className="primary-section-back">
                    <section className="primary-section">
                        <div className="primary-section-left">
                            <MovieCard singleMovieData={singleMovieData}/>
                        </div>
                        <div className="primary-section-right">
                            <div className="content-box">
                                <div className="movie-type">   
                                    <h2>Movie Name</h2>
                                </div>
                                <ul className="gener">
                                    <li>tv14</li>
                                    <li>Drama</li>
                                    <li>Romance</li>
                                    <li>43m</li>
                                </ul>
                            </div>

                            <div className="for-user">
                                <div className="movie-popularity">
                                    <Popularity />
                                    
                                </div>

                                <ul>
                                    <li><a href={playVedio}><i className="far fa-bookmark"></i></a></li>
                                    <li><a href={playVedio}><i className="far fa-heart"></i></a></li>
                                    <li><a href={playVedio}><i className="fas fa-play"></i></a></li>
                                </ul>
                            </div>

                            <div className="overview">
                                <div className="movie-type over">   
                                    <h2>Overview</h2>
                                </div>
                                <div className="content">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias vel eaque iusto magni consequuntur, eius, blanditiis laudantium quod quasi, architecto perferendis. Doloremque minima eos similique incidunt optio deleniti vitae id?</p>
                                </div>
                                <div className="movie-type over">
                                    <h1>Tarun Saini</h1>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <section className="movie-cast">
                    <Cast />
                </section>

                <section className="recommedation">
                    <Recommendation />
                </section>
            </div>
        </div>
    )
}

export default SingleMovie
