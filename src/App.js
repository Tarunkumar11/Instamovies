import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Mainview from './Components/Mainview/Mainview';
import Trending from './Components/Trending/Trending';
import TopBrand from './Components/TopBrand/TopBrand';
import Footer from './Components/Footer/Footer';
import Feedback from './Components/Feedback/Feedback';
import SingleMovie from './Components/SingleMovie/SingleMovie';
import Login from './Components/Login/Login';
import WatchList from './Components/WatchList/WatchList'
import axios from 'axios';

// const TreandingContext = React.createContext()

function App() {

  const url  = "https://api.themoviedb.org/3/trending/movie/day?api_key=01fa22077a62608ab466b3c017eba6a0"
  const [movies, setMovies] = useState(null);
  const [scifi, setsSifi] = useState(null)

  // const genres =  [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]

  useEffect(()=> {
                  axios.get(url).then(function (response)
                  {
                      setMovies(response.data)
                      const temp = []
                      for(let i = 0; response.data &&  i< response.data.results.length; i++){
                        if(response.data.results[i].genre_ids.includes(878) ) {
                          temp.push(response.data.results[i])
                        }
                      }
                      setsSifi(temp)
                  })
                  .catch(function (error) {
                      console.log(error);
                  })
            }, [])

  
  
//const topRate = {}

//const newInterest = {}
  


  // const TreandingContext = React.createContext()
  
  return (
    <div className="App"> 
      <Navbar />
      <Router >
        <Route exact path='/'>
          <Mainview />
          {  movies && <Trending data= {{title: "Trending", movies_data: movies.results }} />}
          { scifi && <Trending data= {{title: "Sci-fi", movies_data: scifi }} />}
          <TopBrand />
          <Feedback />
        </Route>
        <Route exact path='/watchlist' render={(props) => <WatchList text="Hello, " {...props} />} />
        <Route exact path='/movie/:id/:title' render={(props) => <SingleMovie singlemoviedata = {props} />}  />
        <Route exact path='/login' component={Login} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
