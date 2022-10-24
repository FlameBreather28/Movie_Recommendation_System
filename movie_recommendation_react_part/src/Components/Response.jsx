import React from 'react'
import Navbar from './Navbar'
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from 'sweetalert';


function Response(pops) {
    const url = "http://localhost:9000/currentmoviedata"
    const location = useLocation();
    const navigate = useNavigate();
    async function sendDataToBackend(a) {
        a.preventDefault();
        //   console.log(typeof(location.state.array[1]));
        // var data = {
        //     movieTitle: location.state.array[1],
        // }
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                movieTitle: location.state.array[1],
            }),
            mode: "cors",
            headers: { "Content-type": "application/json;charset=utf-8" }
        }
        )
        .then((res) => res.json())
            // .then(res=>console.log(res))
        .then((res) => {
                console.log(res[0])
                console.log(typeof (res))
                if(res[0]==="error"){
                    
                    swal("Can't Recommend","Current movie is not present in Our Data Set","error")
                }else{
                    console.log("working")
                navigate('/recommendationToUser', { state: res })
                    
                }
        })


    }






    return (<>

        <Navbar />
        {/* {console.log(location)} */}
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

                <div className='detailed-move-info-all-data'>
                    <p>
                        <h3>Trailer : </h3>
                        <Link to='/DynamicTrailer' state={{ id: location.state.array[7] }} className='trailerLink'>View Trailer</Link>
                    </p>
                </div>

                <div className="detailed-move-info-all-data">
                    <form onSubmit={sendDataToBackend} >
                        <button type="submit" >Recommend Movie on Current Title</button>
                    </form>
                </div>

            </div>
        </div>
    </>

    )
}

export default Response