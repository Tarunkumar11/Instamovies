import React, {useState, createRef} from 'react'
import './Filter.css'

function Filter() {


    // const url = "https://api.themoviedb.org/3/movie/popular?api_key=01fa22077a62608ab466b3c017eba6a0&language=en-US&page=2"

    // const [movie, setMovie]   = useState(null)
    // const [selectedGeners, SetGeners] = useState(null)
    // const [selectedYears, SetYears] = useState(null)
    // const [selectedTypes, SetTypes] = useState(null)

    // const allGeners = {"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}
    // const listGeners =  allGeners.genres
    
    // function closeFilter(){
    //     const filter  =  document.getElementById("filterid")
    //     if(filter !== null) {
    //         filter.style.display = "none"
    //     }

    // }

    // let years = []
    // for(let year = 2010; year < 2022; year ++ ){
    //     years.push(year)
    // }
    // const optionGener   = createRef()
    // const optionYear = createRef()
    // const optiontype = createRef()

    // function handleOption(e) {
    //     if(optionGener){
    //         if(optionGener.current.style.display==="none"){
    //             optionGener.current.style.display = "block"
    //         }
    //         else {
    //             optionGener.current.style.display = "none"
    //         }
    //     }        
    // }

    // function handleOptionyear () {
        
    //     if(optionYear){
    //         if(optionYear.current.style.display==="none"){
    //             optionYear.current.style.display = "block"
    //         }
    //         else {
    //             optionYear.current.style.display = "none"
    //         }
    //     }
    // }

    // function handleOptionType() {
        
    //     if(optiontype){
    //         if(optiontype.current.style.display==="none"){
    //             optiontype.current.style.display = "block"
    //         }
    //         else {
    //             optiontype.current.style.display = "none"
    //         }
    //     }

    // }

    // const movieType = [ "Bollywood", "Hollywoo", "Tamil"]

    // function genresChange()
    // {
    //     const array  = optionGener.current.childNodes
    //     let tempgeners = []
    //     array.forEach(element => {
    //         if(element.childNodes[0].checked===true){
    //             tempgeners.push(element.childNodes[0].value)
    //         }
    //     });
    //     SetGeners(tempgeners)
    // }

    // function yearChange()
    // {
    //     const array  = optionYear.current.childNodes
    //     let tempyears = []
    //     array.forEach(element => {
    //         if(element.childNodes[0].checked===true){
    //             tempyears.push(element.childNodes[0].value)
    //         }
    //     });
    //     SetYears(tempyears)
    // }

    // function typeChange()
    // {
    //     const array  = optiontype.current.childNodes
    //     let tempType = []
    //     array.forEach(element => {
    //         if(element.childNodes[0].checked===true){
    //             tempType.push(element.childNodes[0].value)
    //         }
    //     });
    //     SetTypes(tempType)
    // }

    


    return (
        <div className="filter" id="filterid">
            {/* <div className="close-icon">
                <i className="far fa-times-circle" onClick={closeFilter}></i>
            </div>
            <div className="filter-container">
                <h2>Filters</h2>
                <ul>
                    <li className="genresoption">
                        <h1 onClick={handleOption}>genres</h1>
                        <div className="alloptions" ref = {optionGener} onChange={genresChange} >
                        {
                            listGeners.map((item)=> {
                                return (<div className="option">
                                    <input type="checkbox" name={item.name} value={item.id}  placeholder={item.name}/>
                                    <label htmlFor={item.name} >{item.name}</label><br />
                                </div>)
                                
                            })
                        }
                        </div>
                    </li>
                    <li  className="genresoption">
                        <h1 onClick={handleOptionyear}>release year</h1>
                        <div className="alloptions"  ref = {optionYear}  onChange={yearChange}>
                        {
                            years.map((year)=> {
                                return (<div className="option">
                                    <input type="checkbox" name={year} value={year} />
                                    <label htmlFor={year} >{year}</label><br />
                                </div>)
                                
                            })
                        }
                        </div>
                    </li>

                    <li  className="genresoption">
                        <h1 onClick={handleOptionType}>Movie Type</h1>
                        <div className="alloptions" ref = {optiontype} onChange={typeChange}>
                        {
                            movieType.map((movie)=> {
                                return (<div className="option">
                                    <input type="checkbox" name={movie} value={movie} />
                                    <label htmlFor={movie} >{movie}</label><br />
                                </div>)
                                
                            })
                        }
                        </div>
                    </li>
                </ul>
            </div> */}
        </div>
    )
}

export default Filter
