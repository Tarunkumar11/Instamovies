import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Mainview from './Components/Mainview/Mainview';
import Trending from './Components/Trending/Trending';
import TopBrand from './Components/TopBrand/TopBrand';
import Footer from './Components/Footer/Footer';
import Feedback from './Components/Feedback/Feedback';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Mainview />
      <Trending title={"Trending"}/>
      <Trending title={"Top Rated"} />
      <Trending title={"Sci-fi"} />
      <Trending title={"Discover new Interest"} />
      <TopBrand />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
