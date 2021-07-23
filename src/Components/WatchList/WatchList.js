import React from 'react'
import watch from '../../images/watchlist/undraw-pending.5ad17bb5.svg'
import './watch.css'

export const WatchList = () => {
    return (
        <div className="watch-bg">
                <h2 className="center-text">Your watchlist is currently empty</h2>
                <img className="watch-img" src={watch} alt = "Empty"></img>
        </div>
    )
}

export default WatchList;
