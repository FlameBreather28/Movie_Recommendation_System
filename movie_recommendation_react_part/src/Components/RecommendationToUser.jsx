import React from 'react'
import { useLocation } from "react-router-dom";
import Navbar from './Navbar';
import RecommendationCard from './RecommendationCard';


function RecommendationToUser() {
  var location = useLocation()
  // let val1=location.state[0];
  // console.log(val1)
  return (
    <>
      <p>{console.log('Location sate[0]:',location.state[0])}</p>
      <Navbar/>
      <div className=" movies" >
        <h1>Recommended Movies</h1>
        <RecommendationCard id={location.state[0]} /> 
       <RecommendationCard id={location.state[1]} /> 
         <RecommendationCard id={location.state[2]} />
        <RecommendationCard id={location.state[3]} />
        <RecommendationCard id={location.state[4]} />
        
      </div>
    </>
  )
}

export default RecommendationToUser