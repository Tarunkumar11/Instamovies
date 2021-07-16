import React from 'react'
import MovieCard from './MovieCard'
import './Trending.css'



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
                            return <MovieCard key = {moviedata.id}  singleMovieData= {moviedata}/>
                        })
                    }
                    
                    {/* <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard /> */}
                </div>
            </div>  
        </div>
    )
}

export default Trending

