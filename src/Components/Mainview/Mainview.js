import React, {useState} from 'react'
import './Mainview.css'
import axios from 'axios'
import SearchResults from '../SearchResult/SearchResults';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Particles from 'react-particles-js';
import { useFormik } from 'formik'
import {Link} from "react-router-dom";

function Mainview() {

    const [searchMoviesList, setSearchMovies]  = useState(null);
    const [flag, setFlag] = useState(false)

    const formik = useFormik({
        initialValues:{
            search:""
        },
        
        onSubmit: values => {
            let url =  `https://api.themoviedb.org/3/search/movie?api_key=01fa22077a62608ab466b3c017eba6a0&query=${values.search}`
            axios.get(url).then((response) => {setSearchMovies(response.data)})     
            setFlag(true)
          },
        
        // onChange: values=> {
        //     // let url =  `https://api.themoviedb.org/3/search/movie?api_key=01fa22077a62608ab466b3c017eba6a0&query=${values.search}`
        //     // axios.get(url).then((response) => {setSearchMovies(response.data)})     
        //     console.log("This is value", values)
        // }, 

        // handleBlur:(e) => {
        //     console.log("buasdjlfhdfksdh")
        // }

    })
    
    function getsuggestion(value) {
        console.log(value)
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
         <Particles  className="partical"  params={{

        interactivity:{
            detectsOn: "canvas",
            events: {
                onClick: {
                    enable: true,
                    mode:'push'
                },

                onhover: {
                enable: true,
                mmode: 'repulsive'
            }
            }
           
        },
          particles: {

            line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 2
            				}
            			},

            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 1000,
              }
            },
            
            move: {
                speed:20
            }
            // shape: {
            //         type: "circle",
            //         stroke: {
            //             width: 2,
            //             color: "#000000"
            //         }
            //     }
            }

        }}/>
        {/* <div className="partical">
       

        </div> */}
        
        <div className="center-view">
            <div className="center-text" >
                <h2>
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
        {  flag && searchMoviesList && <SearchResults movies_data={searchMoviesList} /> }
        <Router>
            <Route  exact path='/search'>
                
            </Route>
        </Router>
        
        </>


       
    )
}

export default Mainview

