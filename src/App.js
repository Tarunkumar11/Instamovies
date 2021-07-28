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
import Signup from './Components/Login/Signup';
import WatchList from './Components/WatchList/WatchList'
import axios from 'axios';
import PrivateRounte from './Components/PrivateRoute/PrivateRounte';
import UPrivateRounte from './Components/PrivateRoute/UPrivateRoute';
import { AuthProvider } from './contexts/AuthContext';
import NotFound from './Components/NotFound/NotFound';

function App() {

  const url  = "https://api.themoviedb.org/3/trending/movie/day?api_key=01fa22077a62608ab466b3c017eba6a0"
  const [movies, setMovies] = useState(null);
  const [scifi, setsSifi] = useState(null)
  

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

  return (
    <AuthProvider>
      <div className="App"> 
        
        <Router >
          <Navbar />
          <Route exact path='/'>
            <Mainview />
            {  movies && <Trending data= {{title: "Trending", movies_data: movies.results }} />}
            { scifi && <Trending data= {{title: "Sci-fi", movies_data: scifi }} />}
            <TopBrand />
            <Feedback />
          </Route>
          <PrivateRounte exact path='/watchlist' component={WatchList} render={(props) => <WatchList  {...props} />} />
          <Route exact path='/movie/:id/:title' render={(props) => <SingleMovie singlemoviedata = {props} />}  />
          <UPrivateRounte exact path='/login' component={Login} />
          <UPrivateRounte exact path='/signup' component={Signup} />
          <Route exact path="/404" component={NotFound} />
        </Router>
        
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
