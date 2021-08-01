import React, {useState, createRef, useEffect} from 'react'
import './Filter.css'
import axios from 'axios'

function Filter() {


    
    const [allMovie, setMovie]   = useState([])
    const [selectedGeners, SetGeners] = useState([])
    const [selectedYears, SetYears] = useState([])
    const [selectedTypes, SetTypes] = useState([])

    const allGeners = {"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}
    const listGeners =  allGeners.genres
    
    function closeFilter(){
        const filter  =  document.getElementById("filterid")
        if(filter !== null) {
            filter.style.display = "none"
        }

    }

    let years = []
    for(let year = 2010; year < 2022; year ++ ){
        years.push(year)
    }
    const optionGener   = createRef()
    const optionYear = createRef()
    const optiontype = createRef()

    function handleOption(e) {
        if(optionGener){
            if(optionGener.current.style.display==="none"){
                optionGener.current.style.display = "block"
            }
            else {
                optionGener.current.style.display = "none"
            }
        }        
    }

    function handleOptionyear () {
        if(optionYear){
            if(optionYear.current.style.display==="none"){
                optionYear.current.style.display = "block"
            }
            else {
                optionYear.current.style.display = "none"
            }
        }
    }

    function handleOptionType() {
        
        if(optiontype){
            if(optiontype.current.style.display==="none"){
                optiontype.current.style.display = "block"
            }
            else {
                optiontype.current.style.display = "none"
            }
        }

    }

    const movieType = [ "Bollywood", "Hollywoo", "Tamil"]

    function genresChange()
    {
        const array  = optionGener.current.childNodes
        let tempgeners = []
        array.forEach(element => {
            if(element.childNodes[0].checked===true){
                tempgeners.push(element.childNodes[0].value)
            }
        });
        SetGeners(tempgeners)
    }

    function yearChange()
    {
        const array  = optionYear.current.childNodes
        let tempyears = []
        array.forEach(element => {
            if(element.childNodes[0].checked===true){
                tempyears.push(element.childNodes[0].value)
            }
        });
        SetYears(tempyears)
    }

    function typeChange()
    {
        const array  = optiontype.current.childNodes
        let tempType = []
        array.forEach(element => {
            if(element.childNodes[0].checked===true){
                tempType.push(element.childNodes[0].value)
            }
        });
        SetTypes(tempType)
    }

    function checker(arr, target){
        for(let i = 0; i < target.length; i ++ ){
            let flag = false
            for(let j = 0; j < arr.length; j++) {   
                if(arr[j] === Number(target[i])){
                    flag   = true;
                    break
                }
            }
            if(flag === false) {
                return false
            }
        }
        return true
    }
    useEffect(() => {
        for(let page=1; page <3; page++){
            let url = "https://api.themoviedb.org/3/movie/popular?api_key=01fa22077a62608ab466b3c017eba6a0&language=en-US&page=".concat(page)
            // eslint-disable-next-line no-loop-func
            axios.get(url).then((response) => {
                setMovie((premovie) => {
                    let newmovie = {}
                    premovie.forEach(movie => {
                        
                        if(selectedGeners.length === 0){
                            newmovie[movie.id] = movie
                        }
        
                        else if(movie.length && checker(movie.genre_ids, selectedGeners)){
                            newmovie[movie.id] = movie
                            console.log(movie.genre_ids)
                        } 
                    });

                    response.data.results.forEach(movie => {
                        if(selectedGeners.length === 0){
                            newmovie[movie.id] = movie
                        }
                        else if(selectedGeners && movie && checker(movie.genre_ids, selectedGeners)){
                            newmovie[movie.id] = movie
                        } 
                     });

                    console.log("newmove", newmovie)
                let final = [] 
                for(const val in newmovie){
                    final.push(newmovie[val])
                }
                console.log(final)
                 return final
                }) 
                // setArray((prestate) => {console.log(prestate); return [...prestate, ...response.data.results]} )
            })
        }
    }, [selectedGeners])
    // console.log(allMovie)

    
    return (
        <div className="filter" id="filterid">
            <div className="close-icon">
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
                                    <label for={item.name} >{item.name}</label><br />
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
                                    <label for={year} >{year}</label><br />
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
                                    <label for={movie} >{movie}</label><br />
                                </div>)
                                
                            })
                        }
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Filter
