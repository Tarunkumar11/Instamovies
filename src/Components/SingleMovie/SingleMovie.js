import React, {useState, useEffect}from 'react'
import MovieCard from '../Trending/MovieCard'
import './SingleMovie.css'
import Popularity from './Popularity'
import Cast from './Cast'
import Recommendation from './Recommendation'
import axios from 'axios'
import Loader from '../Loader/Loader'
import ReactPlayer from 'react-player'
import {db} from '../../firebase'
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from "react-router-dom";

function SingleMovie(props) {
    const {currentUser} = useAuth()
    const [movie, setMovies] = useState(null);
    const [trailerFlag, setTrailerFlag]  = useState(false)
    const [trailers, setTrailers] = useState(null)
    let history = useHistory();
    const movieid = props.singlemoviedata.match.params.id
    useEffect((props)=> {
        const url   = `https://api.themoviedb.org/3/movie/${movieid}?api_key=01fa22077a62608ab466b3c017eba6a0&language=en-US`
        axios.get(url).then((response) => {
            setMovies(response.data)
            })
        }, [movieid])
    

    function setMovieTrailer() {
        setTrailerFlag(true)
        const newurl = `https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=01fa22077a62608ab466b3c017eba6a0&language=en-US`
        axios.get(newurl).then((response) => {
            setTrailers(response.data.results)
            })
            
    }

    let  length = 0
    if(trailers !== null){
        length = trailers.length
    }
    const [currIndex, setIndex] = useState(0)
    function nextindex(){
        setIndex((preIndex) =>{
            let next = preIndex + 1
            if(next>= length){
                next = 0
            }
            return next
        } )
    }

    function backIndex(){
        setIndex((preIndex) => {
            let pre = preIndex - 1
            if(pre < 0){
                pre = length -1
            }
            return pre
        })
    }

    async function addwatchlist(){
        if(!currentUser){
            history.push("/login");
            return
        }
        db.collection('watchlist').doc(currentUser.uid).get().then(data => {
            let newarr = data.data()?.movieId||{}
            newarr[movieid] = movie
            db.collection("watchlist").doc(currentUser.uid).set({
                movies:newarr,
                userId:currentUser.uid
            }, {merge:true}).then((response) => {console.log(response)}).catch((error)=>{console.log(error)})

        })

        
    }
    const playVedio = "#"
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
                                <li className="bookmark-play-icon" onClick={addwatchlist}><i className="far fa-bookmark"></i></li>
                                <li className="bookmark-play-icon" ><a href={playVedio}><i className="far fa-heart"></i></a></li>
                                <li className="bookmark-play-icon" ><a href={playVedio} onClick={setMovieTrailer} ><i className="fas fa-play"></i></a></li>
                            </ul>
                        </div>

                        {trailerFlag && trailers && <div className="trailer">
                            <div className="trailer-backward" onClick={backIndex} >
                                <i className="fas fa-arrow-circle-left"></i>
                            </div>
                            
                               {trailers.length !== 0 &&  <ReactPlayer url={"https://www.youtube.com/watch?v="+trailers[currIndex].key} width = "80%" height = "80%" controls />}
                               {trailers.length === 0 && <h1>trailer is not available </h1>}

                            
                            <div className="closeicon"><i className="far fa-times-circle" onClick={(e) => {setTrailerFlag(false);}}></i></div>
                            <div className="trailer-forward" onClick={nextindex}>
                                <i className="fas fa-arrow-circle-right"></i>
                            </div>

                        </div>}

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
