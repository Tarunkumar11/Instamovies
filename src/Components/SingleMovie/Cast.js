import React, {useState, useEffect} from 'react'
import FeedbackCard from '../Feedback/FeedbackCard'
import './Cast.css'
import axios from 'axios'

function Cast(props) {
    console.log(props.id)
    const [movieCast, setMovieCast] = useState(null)
    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${props.id}/credits?api_key=01fa22077a62608ab466b3c017eba6a0&language=en-US`
        axios.get(url).then((response) => {
            console.log(response.data.cast.slice(0,30))
            setMovieCast(response.data.cast.slice(0,30))
            })
        
    }, [props.id])

    return (
        <>
             <div className="movie-type cast-toc">   
                    <h2>Movie Casts</h2>
               
                </div>
            {
                movieCast && <div className='cast'>
                    {movieCast.map((cast) => {return <FeedbackCard extraclass={" cast-card"}  extraclass2={" cast-icon"}  data = {cast}/>})}                
                </div>
            }
        </>
    )
}

export default Cast
