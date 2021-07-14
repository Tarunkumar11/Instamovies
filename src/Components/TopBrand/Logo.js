import React from 'react'
import './Logo.css'
function Logo(props) {
    return (
        <div className="logo">
            <img src={props.image} alt={props.text} />
        </div>
    )
}

export default Logo
