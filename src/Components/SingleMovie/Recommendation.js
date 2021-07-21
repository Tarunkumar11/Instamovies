import React, {useState, useEffect} from 'react'
import Treanding from '../Trending/Trending'
import axios from 'axios'
function Recommendation(props) {

    console.log(props)
    const [recommendedMovie, setRecommendedMovie]   = useState(null)
    const movieId  =  props.id
    useEffect(()=> {
        const url   = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=01fa22077a62608ab466b3c017eba6a0&language=en-US&page=1`
        axios.get(url).then((response) => {
            console.log(response)
            setRecommendedMovie(response.data)
            })
        }, [movieId])
   
    return (
        <>
            {recommendedMovie && <Treanding data={{title : "Similer movies", movies_data: recommendedMovie.results}}/>  }
        </>
    )
}

export default Recommendation
