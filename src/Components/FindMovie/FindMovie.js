import React, {useState, useEffect} from 'react'
import MovieCard from '../Trending/MovieCard'
import './FindMovie.css'
import axios from 'axios'
import {Link} from "react-router-dom";


function FindMovie(props) {
    const [page, setPage] = useState(1)
    const [movies,setMovies] = useState(null)
    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=01fa22077a62608ab466b3c017eba6a0&language=en-US&page=${page}`
        axios.get(url).then((response) => { setMovies(response.data);})
    }, [page])
    let heading = 'P' + props.location.pathname.replace('/','').slice(1,6) + ' Movies'
    return (
        movies != null  && 
        <div className="searched-movie container">
            <div className="movie-type">   
                <h2>{heading}</h2>
            </div>
            <div className="second-part">
                <div className ="searched-result">
                    {
                        movies.results.map((moviedata) => {
                            return <Link to={{ pathname: `/movie/${moviedata.id}/${moviedata.title.split(" ").join("-")}`}}
                                            key = {moviedata.id} ><MovieCard  boxshadow={{boxShadow:"1px -1px 8px #c6c5c529, -1px -1px 11px 0px #bebdbd"}} singleMovieData= {moviedata}/></Link>
                        })
                    }
                </div>
                <div className="next-page">
                    <ul>
                        <li className="pre-arrow-pagination" onClick={() => {setPage((page) => {return Math.max(page-1 , 1)})}} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="w-4 h-4 text-gray-7 dark:text-gray-7 arrow-svg"><path fillRule="evenodd" d="M16.091 4.929l-7.057 7.078 7.057 7.064a1 1 0 01-1.414 1.414l-7.764-7.77a1 1 0 010-1.415l7.764-7.785a1 1 0 111.415 1.414z" clipRule="evenodd"></path></svg></li>
                        <li value='1'onClick={()=> {setPage(1)}}>1</li>
                        <li value='2'onClick={()=> {setPage(2)}}>2</li>
                        <li value="3"onClick={()=> {setPage(3)}}>3</li>
                        <li>...</li>
                        <li value="4"onClick={()=> {setPage(500)}}>500</li>
                        <li className="pre-arrow-pagination" onClick={() => {setPage((page) => {return page+1 })}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="w-4 h-4 text-gray-7 dark:text-gray-7"><path fillRule="evenodd" d="M7.913 19.071l7.057-7.078-7.057-7.064a1 1 0 011.414-1.414l7.764 7.77a1 1 0 010 1.415l-7.764 7.785a1 1 0 01-1.414-1.414z" clipRule="evenodd"></path></svg></li>  
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FindMovie




