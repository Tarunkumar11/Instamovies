import React from 'react'
import MovieCard from '../Trending/MovieCard'


function SearchResults(props) {
    
    console.log(props)
    return (
        <div className="result">
            <div className="container-result">
                <div className="movie-type">   
                    <h2>Searched Result</h2>
                </div>
                {
                    props.movies_data.results.map((moviedata) => 
                    {
                        return <MovieCard key = {moviedata.id}  singleMovieData= {moviedata}/>
                    })
                }
            </div>
        </div>
    )
}

export default SearchResults
