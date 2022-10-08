import React from 'react'
import Navbar from './Navbar'
import { useLocation } from "react-router-dom";

function Response(pops) {
  const location = useLocation();
  return (<>

  <Navbar/>
  {console.log(location)}
  <div className='detailed-movie-info'>
            <div className='detailed-movie-info-image'>
                <img srcSet={location.state.array[0]} alt='' />
            </div>
            <div className='detailed-movie-info-all'>
                <div className='detailed-move-info-all-data'>
                    <p><h3>Title :  </h3>{location.state.array[1]}</p>
                </div>
                <div className='detailed-move-info-all-data'><p> <h3>RuntimeMins :</h3> {location.state.array[2]}</p></div>
                <div className='detailed-move-info-all-data'><p>
                    <h3>Plot :  </h3> {location.state.array[3]} </p></div>

                <div className='detailed-move-info-all-data'><p>
                    <h3>Stars :
                    </h3>{location.state.array[4]}</p></div>

                <div className='detailed-move-info-all-data'><p>
                    <h3>Genres :
                    </h3>{location.state.array[5]}</p></div>

                <div className='detailed-move-info-all-data'><p>
                    <h3>ImDbRating :
                    </h3>{location.state.array[6]}</p></div>

                <div className='detailed-move-info-all-data'> <p>
                    <h3>Trailer :  </h3><a href='https://www.imdb.com/video/imdb/vi632472089/imdb/embed'> View trialer</a></p></div>

            </div>
        </div>
  </>
 
  )
}

export default Response