import React from 'react';
import Navbar from './Components/Navbar';
import Hollywood from './Components/Hollywood_movies';
import Hindi from './Components/Hindi_movies';
import Top10Movies from './Components/Top_10_movies';
import { Routes, Route, Link } from "react-router-dom";
import Holly1 from './Components/movie_card_all_data/HollywoodMovies/holly-1/Holly1'
import Holly2 from './Components/movie_card_all_data/HollywoodMovies/holly-2/Holly2'
import Holly3 from './Components/movie_card_all_data/HollywoodMovies/holly-3/Holly3'
import Holly4 from './Components/movie_card_all_data/HollywoodMovies/holly-4/Holly4'
import Holly5 from './Components/movie_card_all_data/HollywoodMovies/holly-5/Holly5'
import Holly6 from './Components/movie_card_all_data/HollywoodMovies/holly-6/Holly6'
import Holly7 from './Components/movie_card_all_data/HollywoodMovies/holly-7/Holly7'
import Holly8 from './Components/movie_card_all_data/HollywoodMovies/holly-8/Holly8'

import Hin1 from './Components/movie_card_all_data/HindiMovies/hin-1/Hin1'
import Hin2 from './Components/movie_card_all_data/HindiMovies/hin-2/Hin2'
import Hin3 from './Components/movie_card_all_data/HindiMovies/hin-3/Hin3'
import Hin4 from './Components/movie_card_all_data/HindiMovies/hin-4/Hin4'
import Hin5 from './Components/movie_card_all_data/HindiMovies/hin-5/Hin5'
import Hin6 from './Components/movie_card_all_data/HindiMovies/hin-6/Hin6'
import Hin7 from './Components/movie_card_all_data/HindiMovies/hin-7/Hin7'
import Hin8 from './Components/movie_card_all_data/HindiMovies/hin-8/Hin8'

import Top1 from './Components/movie_card_all_data/Top10Movies/t-1/Top1'
import Top2 from './Components/movie_card_all_data/Top10Movies/t-2/Top2'
import Top3 from './Components/movie_card_all_data/Top10Movies/t-3/Top3'
import Top4 from './Components/movie_card_all_data/Top10Movies/t-4/Top4'
import Top5 from './Components/movie_card_all_data/Top10Movies/t-5/Top5'
import Top6 from './Components/movie_card_all_data/Top10Movies/t-6/Top6'
import Top7 from './Components/movie_card_all_data/Top10Movies/t-7/Top7'
import Top8 from './Components/movie_card_all_data/Top10Movies/t-8/Top8'
import Top9 from './Components/movie_card_all_data/Top10Movies/t-9/Top9'
import Top10 from './Components/movie_card_all_data/Top10Movies/t-10/Top10'


import Response from './Components/Response';
import Trailer from './Components/Trailer'
import RecommendationToUser from './Components/RecommendationToUser';
import DynamicTrailer from './Components/DynamicTrailer';





function App() {

  let check = ""
  //   constructor(props) {
  //     super(props);
  //     this.state = { apiResponse: "" };
  // }

  // callAPI() {
  //     fetch("http://localhost:9000/testApi")
  //         .then(res => res.text())
  //         .then(res => this.setState({ apiResponse: res }));
  // }

  // componentWillMount() {
  //     this.callAPI();
  // }
  window.location.href === "http://localhost:3000/" ?
    check = true
    :
    check = false








  // render(){
  return (<>
    <Routes>
      <Route exact path='/' element={<><Navbar value={check} /><Hollywood /><Hindi /><Top10Movies />
        {/* <p className="App-intro">;{this.state.apiResponse}</p> */}
      </>} />

      <Route path='/Holly1' element={<Holly1 />} />
      <Route path='/Holly2' element={<Holly2 />} />
      <Route path='/Holly3' element={<Holly3 />} />
      <Route path='/Holly4' element={<Holly4 />} />
      <Route path='/Holly5' element={<Holly5 />} />
      <Route path='/Holly6' element={<Holly6 />} />
      <Route path='/Holly7' element={<Holly7 />} />
      <Route path='/Holly8' element={<Holly8 />} />

      <Route path='/Hin1' element={<Hin1 />} />
      <Route path='/Hin2' element={<Hin2 />} />
      <Route path='/Hin3' element={<Hin3 />} />
      <Route path='/Hin4' element={<Hin4 />} />
      <Route path='/Hin5' element={<Hin5 />} />
      <Route path='/Hin6' element={<Hin6 />} />
      <Route path='/Hin7' element={<Hin7 />} />
      <Route path='/Hin8' element={<Hin8 />} />

      <Route path='Top1' element={<Top1 />} />
      <Route path='Top2' element={<Top2 />} />
      <Route path='Top3' element={<Top3 />} />
      <Route path='Top4' element={<Top4 />} />
      <Route path='Top5' element={<Top5 />} />
      <Route path='Top6' element={<Top6 />} />
      <Route path='Top7' element={<Top7 />} />
      <Route path='Top8' element={<Top8 />} />
      <Route path='Top9' element={<Top9 />} />
      <Route path='Top10' element={<Top10 />} />

      <Route exact path='/UserSearchResponse' element={<Response />} />
      <Route exact path="/trailer" element={<Trailer />} />
      <Route exact path="/recommendationToUser" element={<RecommendationToUser />} />
      <Route exact path='/DynamicTrailer' element={<DynamicTrailer/>}/>

      <Route path='/*' element={<div style={{ fontSize: '30px' }} ><h1>Error :Wrong URL</h1> <Link to='/' style={{ color: 'black', textAlign: 'center', display: 'block', }}>GO TO home Page</Link></div>} />
    </Routes>


  </>
  )
}
// }

export default App;
