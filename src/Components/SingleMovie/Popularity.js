import React from 'react'
import './popularity.css'
function Popularity() {
    return (
        <div className="single-chart">
        <svg viewBox="0 0 40 40" className="circular-chart orange">
          <path className="circle-bg" d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"/>
          <path className="circle" strokeDasharray="50, 100" d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"/>
          <text x="20" y="22" className="percentage">30%</text>
        </svg>
      </div>
    )
}

export default Popularity
