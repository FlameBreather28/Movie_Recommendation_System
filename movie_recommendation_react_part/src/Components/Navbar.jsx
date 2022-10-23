import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from './SearchIcon/icons8-search-color-32.png'
import logo from 'C:/Users/susha/OneDrive/Desktop/sem 5 project/movie_recommendation_react_part/src/Components/SearchIcon/logo.png'
// let [url, setUrl] = useState();
function Navbar(props) {
  const navigate = useNavigate()
  let check = props.value;


  // const checkCurrentUrl = () => {
  //   setUrl(window.location.href);
  // }
  const CallApi = (e) => {



    if (e.key === 'Enter') {

      let title, runTime, plot, stars, genres, imDbRating;
      console.log(e.target.value);
      const userValue = e.target.value;
      let resultData, resultDataLowerCase, resultDataToSend;

      //removing spaces from 
      let userValueWithoutSpaces = userValue.trim()
      let userValueInSmallCase = userValueWithoutSpaces.toLowerCase();


      fetch(`https://imdb-api.com/API/AdvancedSearch/k_ub0qd14u/?title=${userValue}`)
        .then((Response) => Response.json())
        .then((data) => {

          console.log(data)

          for (let i = 0; i < 10; i++) {
            resultData = data.results[i]
            resultDataLowerCase = resultData['title'].toLowerCase();
            console.log(userValueWithoutSpaces,resultDataLowerCase)
            if (userValueInSmallCase === resultDataLowerCase) {
              console.log("correct title");
              console.log(data.results[i])
              resultDataToSend = data.results[i];

              let { id, title, runtimeStr: runTime, plot, stars, genres, imDbRating, image } = resultDataToSend;

              return ([image, title, runTime, plot, stars, genres, imDbRating, id])
            }
          
          }

          return Promise.reject();


        }).then((array) => {
          // callResponsePage(e);
          //  console.log(e)


          navigate('/UserSearchResponse', { state: { array } })


        }).catch(() => {
          alert("Your search didn't match any movie.")
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
      {check ? (
        <div className="navbar">
        <div className='logoAndCaption'>
        <img style={{ width: 55, height: 55 }} srcSet={require('./SearchIcon/logo.png')} alt="logo" />
          <p>Movie Recommendation</p>
        </div>
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

      ) : (

        <div className="navbar">
        <div className='logoAndCaption'>
        <img style={{ width: 55, height: 55 }} srcSet={logo} alt="logo" />
          <p>Movie Recommendation</p>
        </div>
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
