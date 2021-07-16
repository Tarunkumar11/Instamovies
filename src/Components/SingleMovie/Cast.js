import React from 'react'
import FeedbackCard from '../Feedback/FeedbackCard'
import './Cast.css'

function Cast() {
    return (
        <>
             <div className="movie-type cast-toc">   
                    <h2>Movie Casts</h2>
                </div>
            <div className='cast'>
                <FeedbackCard extraclass={" cast-card"}  />
                <FeedbackCard extraclass={" cast-card"} />
                <FeedbackCard extraclass={" cast-card"} />
                <FeedbackCard extraclass={" cast-card"} />
                <FeedbackCard extraclass={" cast-card"}  />
                <FeedbackCard extraclass={" cast-card"} />
                <FeedbackCard extraclass={" cast-card"} />
                <FeedbackCard extraclass={" cast-card"} />
                <FeedbackCard extraclass={" cast-card"} />
                <FeedbackCard extraclass={" cast-card"} />
                <FeedbackCard extraclass={" cast-card"} />
            </div>
        </>
    )
}

export default Cast
