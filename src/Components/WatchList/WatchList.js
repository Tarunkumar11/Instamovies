import React, {useState, useEffect }  from 'react'
import watch from '../../images/watchlist/undraw-pending.5ad17bb5.svg'
import './watch.css'
import {db} from '../../firebase'
import { useAuth } from '../../contexts/AuthContext';
import MovieCard from '../Trending/MovieCard'
import {Link} from "react-router-dom";

export const WatchList = () => {
    const [watchlist, setWatchlist] = useState([])
    const {currentUser} = useAuth()
    useEffect(() => {
        db.collection('watchlist').doc(currentUser.uid).get().then(data => {
            if(data.data()?.movies){
                setWatchlist(() => {
                    var arr = []
                    for(const key in data.data()?.movies){
                        arr.push(data.data()?.movies[key])
                    }
                    // if (arr.length !== 0){
                    //     return arr;
                    // }
                    return arr

                })
                
            }
            
        })

    },[currentUser?.uid])

    if(!watchlist.length) {
        return (
            <div className="watch-bg">
                <h2 className="center-text">Your watchlist is currently empty</h2>
                <img className="watch-img" src={watch} alt = "Empty"></img>
            </div>
        )
    }
    else{
        return(
            watchlist.length && <div className ="watch-list">
                <div className="movie-type">   
                    <h2>WatchList</h2>
                </div>
                {
                    watchlist.map((moviedata) => {
                        return <Link to={{ pathname: `/movie/${moviedata.id}/${moviedata.title.split(" ").join("-")}`}}
                                        key = {moviedata.id} ><MovieCard  singleMovieData= {moviedata}/></Link>
                    })
                }
            </div>
            )
    }
    
    
}

export default WatchList;
