import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
const TreandingContext = React.createContext()

function App() {
  const treanding  = {"page":1,"results":
                                      [{"backdrop_path":"/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg","title":"Black Widow","genre_ids":[28,12,53],"original_language":"en","original_title":"Black Widow","poster_path":"/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg","video":false,"vote_average":8.2,"overview":"Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.","id":497698,"vote_count":2209,"release_date":"2021-07-07","adult":false,"popularity":9790.858,"media_type":"movie"},
                                      {"overview":"After stealing the Tesseract during the events of “Avengers: Endgame,” an alternate version of Loki is brought to the mysterious Time Variance Authority, a bureaucratic organization that exists outside of time and space and monitors the timeline. They give Loki a choice: face being erased from existence due to being a “time variant”or help fix the timeline and stop a greater threat.","original_name":"Loki","origin_country":["US"],"name":"Loki","backdrop_path":"/xxlteGxXhpgnoMF7SvdYwHvljnB.jpg","first_air_date":"2021-06-09","genre_ids":[18,10765],"original_language":"en","poster_path":"/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg","vote_count":6072,"vote_average":8.2,"id":84958,"popularity":8925.22,"media_type":"tv"},
                                      {"title":"Gunpowder Milkshake","original_language":"en","original_title":"Gunpowder Milkshake","poster_path":"/5AaKulwpUtkscAokKWtLenGTfVS.jpg","video":false,"id":574060,"overview":"In her turbulent life as a professional assassin, Scarlet was cruelly forced to abandon her daughter Sam and go on the run. Years later, despite the estrangement, Sam has also grown up into a cold blooded hitwoman. After a high-stake mission spins out of control, putting an innocent 8-year-old girl in the middle of the gang war she has unleashed, Sam has no choice but to go rogue. This ultimately leads her back to her mother and her former hitwomen sidekicks, who all join forces in an avenging war against those who took everything from them.","release_date":"2021-07-15","vote_count":9,"adult":false,"backdrop_path":"/hugKriLPeBm3lErSCQiFOgQzpkC.jpg","vote_average":7.6,"genre_ids":[28,53,80],"popularity":50.128,"media_type":"movie"},
                                      {"overview":"Five carpoolers travel in a motorhome to reach a common destination. Night falls, and to avoid a dead animal carcass, they crash into a tree. When they come to their senses, they find themselves in the middle of nowhere. The road they were traveling on has disappeared and there is only a dense, impenetrable forest and a wooden house in the middle of a clearing, which they discover is the home of a spine-chilling cult.","release_date":"2021-07-14","adult":false,"backdrop_path":"/nHPukGdjBJJEFyrAxkTYy6wFn3b.jpg","id":768334,"genre_ids":[27],"original_language":"it","original_title":"A Classic Horror Story","poster_path":"/xnxGmUof0HiugUaNbUFiS4GJPx4.jpg","vote_count":25,"video":false,"title":"A Classic Horror Story","vote_average":6.5,"popularity":40.671,"media_type":"movie"},
                                      {"backdrop_path":"/fdkDp9BCttm2QKNQDyj0ZdojHE4.jpg","title":"Fear Street: 1978","genre_ids":[27,9648],"original_language":"en","original_title":"Fear Street: 1978","poster_path":"/5dNTxhoGDTHHGqUTdxcr4H1dqlU.jpg","video":false,"vote_average":7.5,"overview":"In 1978, two rival groups at Camp Nightwing must band together to solve a terrifying mystery when horrors from their towns' history come alive.","id":591274,"vote_count":321,"release_date":"2021-07-09","adult":false,"popularity":2079.566,"media_type":"movie"},
                                      {"backdrop_path":"/z2UtGA1WggESspi6KOXeo66lvLx.jpg","title":"A Quiet Place Part II","genre_ids":[878,53,27],"original_language":"en","original_title":"A Quiet Place Part II","poster_path":"/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg","video":false,"vote_average":7.8,"overview":"Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.","id":520763,"vote_count":1768,"release_date":"2021-05-21","adult":false,"popularity":1543.45,"media_type":"movie"},
                                      {"overview":"The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester. Determined to save the world for his young daughter, Dan teams up with a brilliant scientist and his estranged father in a desperate quest to rewrite the fate of the planet.","release_date":"2021-06-30","adult":false,"backdrop_path":"/yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg","id":588228,"genre_ids":[28,878],"original_language":"en","original_title":"The Tomorrow War","poster_path":"/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg","vote_count":2302,"video":false,"title":"The Tomorrow War","vote_average":8.3,"popularity":5144.644,"media_type":"movie"},
                                      // {"backdrop_path":"/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg","title":"Luca","genre_ids":[16,35,10751,14],"original_language":"en","original_title":"Luca","poster_path":"/jTswp6KyDYKtvC52GbHagrZbGvD.jpg","video":false,"vote_average":8.1,"overview":"Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.","id":508943,"vote_count":2695,"release_date":"2021-06-17","adult":false,"popularity":3692.521,"media_type":"movie"},
                                      // {"adult":false,"backdrop_path":"/kDQdFs5XL6G8TuXvd0NnJfQ59GP.jpg","genre_ids":[878,12,9648,28,53,14,35],"id":641501,"original_language":"fr","original_title":"Comment je suis devenu super-héros","poster_path":"/d0wn9YtEnmbucx8ZUsT918ctoiK.jpg","video":false,"vote_average":6.3,"overview":"Paris 2020. While superheroes have assimilated into the Parisian society, they discover a new drug that gives themselves personal superpowers to mere mortals. Lieutenants Moreau and Schaltzmann are investigating the case with the support of two ex-superheroes, Monte Carlo and Callista. They'll do whatever it takes to dismantle the traffic. But Moreau's past resurfaces, and the investigation becomes more complicated.","release_date":"2020-11-19","vote_count":101,"title":"How I Became a Superhero","popularity":263.684,"media_type":"movie"},
                                      // {"video":false,"vote_average":7.6,"overview":"Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother.","release_date":"2021-05-19","vote_count":540,"adult":false,"backdrop_path":"/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg","title":"F9","genre_ids":[28,12,80,53],"id":385128,"original_language":"en","original_title":"F9","poster_path":"/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg","popularity":2426.473,"media_type":"movie"},
                                      // {"adult":false,"backdrop_path":"/5C8bfwglg91uZhc2fbfpSjNGamV.jpg","genre_ids":[27,9648],"original_language":"en","original_title":"Fear Street: 1994","poster_path":"/9J9Wy39ZjrVmfk7yMkulpcI5sy0.jpg","vote_count":475,"video":false,"vote_average":6.8,"title":"Fear Street: 1994","overview":"In 1994, a group of teenagers discovers that the terrifying events which have haunted their town for generations ​are all connected — and that they may be the next targets.","release_date":"2021-06-28","id":591273,"popularity":1921.347,"media_type":"movie"},
                                      // {"adult":false,"backdrop_path":"/qPu6o2jle7ydBXPf6sph9Z5jtSP.jpg","genre_ids":[35,18],"original_language":"fr","original_title":"Le guide de la famille parfaite","poster_path":"/cBhkSwZpb3QpUwFuFdWAXTqWAtS.jpg","vote_count":2,"video":false,"vote_average":7.5,"title":"The Guide to the Perfect Family","overview":"A mainstream comedy that raises the question and humorously exposes the difficulty and complexity of raising children in a society of ultra performance, nourished by parents who, wanting to give the best to their children, end up suffocating them.","release_date":"2021-07-14","id":633954,"popularity":34.115,"media_type":"movie"},
                                      // {"adult":false,"backdrop_path":"/dkkDuToxTRMh5lmJXfULEOQK1ZM.jpg","genre_ids":[16,35,10751,878],"original_language":"en","original_title":"Space Jam: A New Legacy","poster_path":"/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg","id":379686,"video":false,"title":"Space Jam: A New Legacy","overview":"When LeBron and his young son Dom are trapped in a digital space by a rogue A.I., LeBron must get them home safe by leading Bugs, Lola Bunny and the whole gang of notoriously undisciplined Looney Tunes to victory over the A.I.'s digitized champions on the court. It's Tunes versus Goons in the highest-stakes challenge of his life.","release_date":"2021-07-08","vote_count":9,"vote_average":7.6,"popularity":1050.268,"media_type":"movie"},
                                      // {"release_date":"2021-07-23","adult":false,"backdrop_path":"/uMClfgmBx89A3Exd83bpyhQHGcL.jpg","genre_ids":[878,53],"vote_count":0,"id":791568,"original_title":"Settlers","poster_path":"/tBUYDwiJVDcnjPneOitVetJk2Rt.jpg","title":"Settlers","video":false,"vote_average":0.0,"original_language":"en","overview":"Remmy and her parents, refugees from Earth, have found peace on the Martian outskirts until strangers appear in the hills beyond their farm. Told as a triptych, the film follows Remmy as she struggles to survive in an uneasy landscape.","popularity":61.285,"media_type":"movie"}, 
                                      // {"vote_average":7.1,"overview":"Ever since he was a kid, Tylor Tuskmon has dreamed of becoming a Scarer just like his idol James P. Sullivan, and now that dream is about to come true... or not. The day he arrives at Monsters Incorporated to begin his dream job as a Scarer, he learns that scaring is out and laughter is in! After being reassigned to the Monsters, Inc. Facilities Team, Tylor sets his sights on a new goal: figuring out how to be funny and becoming a Jokester.","id":90461,"original_name":"Monsters at Work","origin_country":["US"],"backdrop_path":"/2O3ZRECju00Jod6LrVB3uRgZMXK.jpg","genre_ids":[10751,35,16],"original_language":"en","vote_count":436,"poster_path":"/2gxgwhcuSmI5xtexb0t9zGj43FS.jpg","name":"Monsters at Work","first_air_date":"2021-07-07","popularity":1050.291,"media_type":"tv"}, 
                                      // {"backdrop_path":"/uPHXbrh9jlq2XgfjjTFlkJfgtOQ.jpg","genre_ids":[16,18,10759,10765],"original_language":"en","original_name":"Resident Evil: Infinite Darkness","origin_country":["US"],"id":110642,"vote_average":8.1,"first_air_date":"2021-07-08","overview":"Years after the horrors of Raccoon City, Leon and Claire find themselves consumed by a dark conspiracy when a viral attack ravages the White House.","vote_count":213,"name":"Resident Evil: Infinite Darkness","poster_path":"/xCHJq63FrXCJAF7v69Obd24siDF.jpg","popularity":216.336,"media_type":"tv"}, 
                                      // {"vote_average":7.0,"overview":"Millions in stolen cash. Missing luxury bourbon. Watch ordinary people almost get away with these extraordinary heists in this true crime series.","id":127643,"original_name":"Heist","origin_country":["US"],"backdrop_path":"/nSMbU5Vqxw2QGmq5o6voRN4zSzA.jpg","genre_ids":[99,80],"original_language":"en","vote_count":1,"poster_path":"/ttG7SIqtuYRLSHJWE27zdY71hJo.jpg","name":"Heist","first_air_date":"2021-07-14","popularity":30.205,"media_type":"tv"}, 
                                      // {"backdrop_path":"/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg","title":"Mortal Kombat","genre_ids":[28,14,12],"original_language":"en","original_title":"Mortal Kombat","poster_path":"/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg","video":false,"vote_average":7.5,"overview":"Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.","id":460465,"vote_count":3292,"release_date":"2021-04-07","adult":false,"popularity":1077.591,"media_type":"movie"}, 
                                      // {"backdrop_path":"/70AV2Xx5FQYj20labp0EGdbjI6E.jpg","genre_ids":[80,28,53],"original_language":"en","original_title":"Wrath of Man","poster_path":"/M7SUK85sKjaStg4TKhlAVyGlz3.jpg","id":637649,"title":"Wrath of Man","vote_count":1332,"overview":"A cold and mysterious new security guard for a Los Angeles cash truck company surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman's ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score.","release_date":"2021-04-22","vote_average":7.8,"video":false,"adult":false,"popularity":1828.252,"media_type":"movie"},
                                      // {"original_language":"en","poster_path":"/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg","first_air_date":"2013-12-02","vote_average":8.8,"overview":"Rick is a mentally-unbalanced but scientifically-gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.","id":60625,"vote_count":4833,"name":"Rick and Morty","original_name":"Rick and Morty","origin_country":["US"],"genre_ids":[16,35,10765,10759],"backdrop_path":"/A9sCKnxgTTapzu307ybdXCJQEqD.jpg","popularity":1202.434,"media_type":"tv"}],"total_pages":1000,"total_results":20000}
]
  }

 const genres =  [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]
const temp = []
for(let i = 0; i < treanding.results.length; i++){
  if(treanding.results[i].genre_ids.includes(878) ) {
    temp.push(treanding.results[i])
  }
}
const topRate = {}
const sciFi = {'result': temp}
const newInterest = {}
console.log(sciFi)
console.log("fdsfsdfdf")
  // useEffect(()=> {
  //   axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=01fa22077a62608ab466b3c017eba6a0").then()
  // })


  // const TreandingContext = React.createContext()
  
  return (
    <div className="App">
      <Navbar />
      <Router >
        <Route exact path='/'>
          <Mainview />
          <Trending data={{title : "Trending", movies_data: treanding.results}}/>
          <Trending data= {{title: "Sci-fi", movies_data: sciFi.result }} />
          <TopBrand />
          <Feedback />
        </Route>
        <Route exact path='/watchlist'> 
            <WatchList />
        </Route>
        <Route exact path='/roster'> 
            <SingleMovie />
        </Route>
        <Route exact path='/login'> 
            <Login />
        </Route>

            {/* <Trending data= {{title : "Top Rated", movies_data: topRate } }/><Trending data= {{title: "Discover new Interest", movies_data: newInterest}} /> */}
      </Router>
      <Footer />
    </div>
  );
}

export default App;
