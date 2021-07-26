import React, {useState} from 'react'
import './Mainview.css'
import axios from 'axios'
import SearchResults from '../SearchResult/SearchResults';
import Particles from 'react-particles-js';
import { useFormik } from 'formik'
import {Link} from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';

function Mainview() {

    const [searchMoviesList, setSearchMovies]  = useState(null);
    const [flag, setFlag] = useState(false)
    const {currentUser} = useAuth()
    const formik = useFormik({
        initialValues:{
            search:""
        },
        
        onSubmit: values => {
            let url =  `https://api.themoviedb.org/3/search/movie?api_key=01fa22077a62608ab466b3c017eba6a0&query=${values.search}`
            axios.get(url).then((response) => {setSearchMovies(response.data)})     
            setFlag(true)
          },
    })
    
    function getsuggestion(value) {
        if(value === "" || value == null){
            setSearchMovies(null)
        }
        else{
            let url =  `https://api.themoviedb.org/3/search/movie?api_key=01fa22077a62608ab466b3c017eba6a0&query=${value}`
            axios.get(url).then((response) => {setSearchMovies(response.data)})     
            setFlag(false)
        }
    }
    
    return (
        <>
        <Particles  id = "partical" className="partical"  params={{
          particles: {

           line_linked:{
               enable:true,
               distance:205,
               color:"#1bd926",
               opacity:0.2,
               width:3
           },

            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 1000,
              }
            },

            shape: {
                    type: "star",
                    stroke: {
                        width: 6,
                        color: "#e8cf5b"
                    }
                }
            },
            
            move: {
                speed:20
            }

            

        }}/>
        <div className="search-bar-section">
        <div className="center-view">
            <div className="center-text" >
                <h2>
                {currentUser && <span>Hey {currentUser.email}</span>}
                <span>Welcome to Instamovies.</span>
                Now you can search your favourite movie and explore.
                </h2>
            </div>
            
            <div className='search-suggestion'>
                <form className="search-bar" onSubmit={formik.handleSubmit}>
                    <input type="text" id="search-bar" placeholder="Search your favourite movies" name="search" onChange={(e) => {formik.handleChange(e); 
                        getsuggestion(e.target.value) }} value={formik.values.search} />
                    <input className="search-btn" type="submit" placeholder="Search" name='search-btn' />
                </form>
                { flag===false && searchMoviesList &&
                    <div className="suggestion">
                        <ul>
                            {
                            
                                flag===false && searchMoviesList && searchMoviesList.results.splice(0,5).map((movie) => {return <Link to={{ pathname: `/movie/${movie.id}/${movie.title.split(" ").join("-")}`}}
                                            key = {movie.id} ><li>{movie.title}</li></Link>
                                })

                            }
                        </ul>
                    </div>
                }
            </div>
            
            

        </div>
        
        </div>
        {  flag && searchMoviesList && <SearchResults movies_data={searchMoviesList} /> }
        </>


       
    )
}

export default Mainview

