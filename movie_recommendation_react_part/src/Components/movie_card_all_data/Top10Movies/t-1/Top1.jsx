import React from 'react';
import Navbar from './../../../Navbar';
import T1 from './T1.jpg'
import { Link,useNavigate } from "react-router-dom";

function Top1() {
    const navigate = useNavigate();
    const url = "http://localhost:9000/currentmoviedata"

    async function sendDataToBackend(a) {
        a.preventDefault();
         let movieName="Interstellar"
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
                <img src={T1} alt="" />
            </div>
            <div className="detailed-movie-info-all">
                <div className="detailed-move-info-all-data">
                    <p><h3>Title :  </h3>Interstellar
</p>
                </div>
                <div className="detailed-move-info-all-data"><p> <h3>RuntimeMins :</h3> 169</p></div>
                <div className="detailed-move-info-all-data"><p>
                    <h3>Plot :  </h3> A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.</p></div>
                
                <div className="detailed-move-info-all-data"><p>
                    <h3>Stars :
                    </h3>Christopher Nolan, Matthew McConaughey, Anne Hathaway, Jessica Chastain, Mackenzie Foy</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>Genres :
                    </h3>Adventure, Drama, Sci-Fi</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>ImDbRating :
                    </h3>8.6</p></div>
                {/* niche vale 3 div  */}
                <div className="detailed-move-info-all-data">
                        <p>
                            <h3>Trailer : </h3>
                            <Link    
                                to="/trailer"
                                state={{
                                    url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/zSWdZVtXT7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
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
                            <a href="https://www.netflix.com/watch/70305903?trackId=255824129&tctx=0%2C0%2CNAPA%40%40%7Cd210ea9c-358f-4384-b729-5ce245667320-493412476_titles%2F1%2F%2Finter%2F0%2F0%2CNAPA%40%40%7Cd210ea9c-358f-4384-b729-5ce245667320-493412476_titles%2F1%2F%2Finter%2F0%2F0%2Cunknown%2C%2Cd210ea9c-358f-4384-b729-5ce245667320-493412476%7C1%2CtitlesResults%2C70305903">Click here</a>
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

export default Top1