import React from 'react'
import './popularity.css'
function Popularity() {
    return (
        <div class="single-chart">
        <svg viewBox="0 0 40 40" class="circular-chart orange">
          <path class="circle-bg-l" d="M18 2.3845
                 a 20 20 0 0 1 0 40
                 a 20 20 0 0 1 0 -40"/>
           
          
          <path class="circle-bg" d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"/>
          <path class="circle" stroke-dasharray="50, 100" d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"/>
          <text x="18" y="20.35" class="percentage">30%</text>
        </svg>
      </div>
    )
}

export default Popularity
