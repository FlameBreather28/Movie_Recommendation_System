import React from 'react';
import Navbar from './../../../Navbar';
import H3 from './Hin3.jpg'
import { Link,useNavigate } from "react-router-dom";


function Hin3() {
    const navigate = useNavigate();
    const url = "http://localhost:9000/currentmoviedata"

    async function sendDataToBackend(a) {
        a.preventDefault();
         let movieName="Dangal"
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                movieTitle: movieName,
            }),
            mode: "cors",
            headers: { "Content-type": "application/json;charset=utf-8" }
        }
        )
            .then((res) => res.json())
            // .then(res=>console.log(res))
            .then((res) => {
                console.log(res)
                console.log(typeof (res))
                navigate('/recommendationToUser', { state: res })
            })


    }
    return (<>
        <Navbar />
        <div className="detailed-movie-info">
            <div className="detailed-movie-info-image">
                <img src={H3} alt="" />
            </div>
            <div className="detailed-movie-info-all">
                <div className="detailed-move-info-all-data">
                    <p><h3>Title :  </h3>Dangal</p>
                </div>
                <div className="detailed-move-info-all-data"><p> <h3>RuntimeMins :</h3> 161</p></div>
                <div className="detailed-move-info-all-data"><p>
                    <h3>Plot :  </h3> Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.</p></div>
                <div className="detailed-move-info-all-data"><p>
                    <h3>Stars :
                    </h3>Nitesh Tiwari, Aamir Khan, Sakshi Tanwar, Fatima Sana Shaikh, Sanya Malhotra</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>Genres :
                    </h3> Action, Biography, Drama</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>ImDbRating :
                    </h3>8.3</p></div>

                 {/* niche vale 3 div  */}
                 <div className="detailed-move-info-all-data">
                        <p>
                            <h3>Trailer : </h3>
                            <Link    
                                to="/trailer"
                                state={{
                                    url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/x_7YlGv9u1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
                                }} className='trailerlink'
                            >
                                Click here
                            </Link>
                        </p>
                    </div>
{/* 
                    <div className="detailed-move-info-all-data">
                        <p>
                            <h3>Watch Movie here: </h3>
                            <a href="">Click here</a>
                        </p>
                    </div> */}

                    <div className="detailed-move-info-all-data">
                        <form onSubmit={sendDataToBackend} >
                            <button  type="submit" >Recommend Movie on Current Title</button>
                        </form>
                    </div>

            </div>
        </div>
    </>
    )
}

export default Hin3