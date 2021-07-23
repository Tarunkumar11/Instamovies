import React, {useState, useEffect}from 'react'
import MovieCard from '../Trending/MovieCard'
import './SingleMovie.css'
import Popularity from './Popularity'
import Cast from './Cast'
import Recommendation from './Recommendation'
import axios from 'axios'
import Loader from '../Loader/Loader'


function SingleMovie(props) {
    
    const [movie, setMovies] = useState(null);
    const movieid = props.singlemoviedata.match.params.id
    useEffect((props)=> {
        const url   = `https://api.themoviedb.org/3/movie/${movieid}?api_key=01fa22077a62608ab466b3c017eba6a0&language=en-US`
        axios.get(url).then((response) => {
            setMovies(response.data)
            })
        }, [movieid])
    
    const playVedio = ""
    let style = null
    let popularityPercentage = 30;
    
    if(movie) {
        const backImage  = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces" + movie.backdrop_path;
        style  = {  
            backgroundImage: `url(${backImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }
        popularityPercentage = movie.vote_average * 10;
    }
    
    if(movie){
        return (
            <div className="single-movie-container">
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
                                    movie.genres.map((genre) => {return <li key={genre.id}>{genre.name}</li> } )
                                }
                                <li key={ movie.runtime}>{movie.runtime}m</li>
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
                <Cast id={movieid} />
            </section>

            <section className="recommedation">                        
                <Recommendation id={movieid}  />
            </section>
        </div>

        )
    }
    else {
        return <Loader />
    }
}

export default SingleMovie
