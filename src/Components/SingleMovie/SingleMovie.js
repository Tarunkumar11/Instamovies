import React, {useState, useEffect}from 'react'
import MovieCard from '../Trending/MovieCard'
import './SingleMovie.css'
import Popularity from './Popularity'
import Cast from './Cast'
import Recommendation from './Recommendation'
import axios from 'axios'

function SingleMovie(props) {
    // const singleMovieData = {"backdrop_path":"/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg","title":"Black Widow","genre_ids":[28,12,53],"original_language":"en","original_title":"Black Widow","poster_path":"/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg","video":false,"vote_average":8.2,"overview":"Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.","id":497698,"vote_count":2209,"release_date":"2021-07-07","adult":false,"popularity":9790.858,"media_type":"movie"}
    const [Movie, setMovies] = useState(null);
    // useEffect((props)=> {
    //     const url   = props.id
    //     axios.get()
    // })
    const playVedio = ""
    console.log(props.singlemoviedata.location.moviedata.moviedata)
    const movie = props.singlemoviedata.location.moviedata.moviedata

    const style  = {  
                        backgroundImage: "url(" + "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces" + movie.backdrop_path +  ")",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }
    const genres =  [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]                    
    const movieGener = []
    for(let i=0; i<genres.length; i++ ){
        for(let j =0; movie && j < movie.genre_ids.length; j++){
            if(genres[i]["id"] === movie.genre_ids[j]) {
                movieGener.push(genres[i]["name"] )
            }
        }
    }

    console.log(props)
    let popularityPercentage = 30;
    if(movie){
        popularityPercentage = movie.vote_average * 10;
    }
    
    return (
        <div>
            <div className="single-movie-container">
                {
                    console.log("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces"+movie.backdrop_path)
                }
                <div className="primary-section-back" style={style}>
                    <section className="primary-section">
                        <div className="primary-section-left">
                            <MovieCard singleMovieData={movie}/>
                        </div>
                        <div className="primary-section-right">
                            <div className="content-box">
                                <div className="movie-type">   
                                    <h2>{movie.title}</h2>
                                </div>
                                <ul className="gener">
                                    {
                                        movieGener.map((genre) => {return <li>{genre}</li> } )
                                    }
                                    
                                </ul>
                            </div>

                            <div className="for-user">
                                <div className="movie-popularity">
                                    <Popularity popularityPercentage={popularityPercentage} />
                                    
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
                                    <p>{movie.overview}</p>
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
