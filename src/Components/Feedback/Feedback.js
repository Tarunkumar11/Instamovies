import React from 'react'
import FeedbackCard from './FeedbackCard'
import './Feedback.css'

function Feedback() {
    return (
        <div className='feedback-section'>
            <div className="movie-type">   
            <h2>Some Feedback from Users</h2>
            </div>
            <div className="feedback">
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
            </div>
        </div>
    )
}

export default Feedback
