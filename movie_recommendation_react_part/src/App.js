

import Navbar from './Components/Navbar';
import Hollywood from './Components/Hollywood_movies';
import Hindi from './Components/Hindi_movies';
import Top10Movies from './Components/Top_10_movies';
import { Routes, Route, Link } from "react-router-dom";
import H1 from './Components/movie_card_all_data/HollywoodMovies/holly-1/Holly1'
import  sty from './index.css'


function App() {

  return (<>
   <Routes>
    <Route exact path='/' element={<><Navbar/><Hollywood/></>}/>
    <Route exact path='/H1' element={<H1 style={sty}/>}/>
   </Routes>
  </>
  )
}

export default App;
