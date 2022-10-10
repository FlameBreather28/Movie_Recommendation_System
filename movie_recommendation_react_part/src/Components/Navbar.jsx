import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from './SearchIcon/icons8-search-color-32.png'
// let [url, setUrl] = useState();
function Navbar(props) {
  const navigate = useNavigate()
  let check=props.value;


  // const checkCurrentUrl = () => {
  //   setUrl(window.location.href);
  // }
  const CallApi = (e) => {



    if (e.key === 'Enter') {

      let title, runTime, plot, stars, genres, imDbRating;
      console.log(e.target.value);
      const userValue = e.target.value;
      let resultData;
      fetch(`https://imdb-api.com/API/AdvancedSearch/k_nex3m0mq/?title=${userValue}`)
        .then((Response) => Response.json())
        .then((data) => {
          console.log(data.results[0])
          resultData = data.results[0];

          let { id, title, runtimeStr: runTime, plot, stars, genres, imDbRating, image } = resultData;

          return ([image, title, runTime, plot, stars, genres, imDbRating, id])

        }).then((array) => {
          // callResponsePage(e);
          //  console.log(e)
          navigate('/UserSearchResponse', { state: { array } })
        })



      //  const callResponsePage=(e)=>{
      //   navigate('/UserSearchResponse',{title:"hello",runTime})
      //  }


    }
  }
  // console.log(url)
  // checkCurrentUrl()

  return (

  
        <>
        {check?(
          <div className="navbar">
            <img srcSet="" alt="logo" />
            <div className="navbar-inside-div">
              <a href="/">Home</a>
              <a href="#Hollywood" >Hollywood</a>
              <a href="#Hindi">Hindi</a>
              <a href="#Top 10">Top 10</a>
            </div>
            <div className='userInputAndSearch'>
              <input type="text" id="" onKeyUp={CallApi} />
              <img srcSet={searchIcon} alt='' />
            </div>
          </div>

        ):(

          <div className="navbar">
            <img srcSet="" alt="logo" />
            <div className="navbar-inside-div">
              <a href="/">Home</a>
            </div>
            <div className='userInputAndSearch'>
              <input type="text" id="" onKeyUp={CallApi} />
              <img srcSet={searchIcon} alt='' />
            </div>
          </div>
        )}
          
        </>

    
  );
}

export default Navbar;
