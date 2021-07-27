import React from 'react'
import './Filter.css'

function Filter() {
    const crossicon = ""
    function closeFilter(){
        const filter  =  document.getElementById("filterid")
        if(filter !== null) {
            filter.style.display = "none"
        }

    }

    return (
        <div className="filter" id="filterid">
            <div className="close-icon">
                <i className="far fa-times-circle" onClick={closeFilter}></i>
            </div>
            <div className="filter-container">
                <h2>Filters</h2>
                <ul>
                    <li><a href="navigator">
                        <select>
                            <option>genres</option>
                            <option>a</option>
                            <option>a</option>
                            <option>a</option>
                        </select>
                    </a></li>
                    <li><a href="navigator">
                        <select>
                            <option>release year</option>
                            <option>a</option>
                            <option>a</option>
                            <option>a</option>
                        </select>
                    </a></li>
                    <li><a href="navigator">
                        <select>
                            <option>Bollywood</option>
                            <option>a</option>
                            <option>a</option>
                            <option>a</option>
                        </select>
                    </a></li>
                    <li><a href="navigator">
                        <select>
                            <option>Hollywood</option>
                            <option>a</option>
                            <option>a</option>
                            <option>a</option>
                        </select>
                    </a></li>
                </ul>
            </div>
        </div>
    )
}

export default Filter
