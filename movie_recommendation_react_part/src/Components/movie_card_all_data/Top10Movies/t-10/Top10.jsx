import React from 'react';
import Navbar from './../../../Navbar';
import T10 from './T10.jpg'
import { Link,useNavigate } from "react-router-dom";

function Top10() {
    const navigate = useNavigate();
    const url = "http://localhost:9000/currentmoviedata"

    async function sendDataToBackend(a) {
        a.preventDefault();
         let movieName="Transformers: The Last Knight"
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
                <img src={T10} alt="" />
            </div>
            <div className="detailed-movie-info-all">
                <div className="detailed-move-info-all-data">
                    <p><h3>Title :  </h3>Transformers: The Last Knight</p>
                </div>
                <div className="detailed-move-info-all-data"><p> <h3>RuntimeMins :</h3> 154</p></div>
                <div className="detailed-move-info-all-data"><p>
                    <h3>Plot :  </h3> A deadly threat from Earth's history reappears and a hunt for a lost artifact takes place between Autobots and Decepticons, while Optimus Prime encounters his creator in space.</p></div>
                
                <div className="detailed-move-info-all-data"><p>
                    <h3>Stars :
                    </h3>	Mark Wahlberg, Anthony Hopkins, Laura Haddock</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>Genres :
                    </h3>Action,Adventure,Sci-Fi</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>ImDbRating :
                    </h3>5.2</p></div>

                {/* niche vale 3 div  */}
                <div className="detailed-move-info-all-data">
                        <p>
                            <h3>Trailer : </h3>
                            <Link    
                                to="/trailer"
                                state={{
                                    url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/6Vtf0MszgP8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
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
                            <a href="https://www.netflix.com/watch/80164399?trackId=255824129&tctx=0%2C0%2CNAPA%40%40%7C89b0ab68-18f2-4e1c-ad8a-3e8332bbb70b-464210513_titles%2F1%2F%2Ftransformer%20last%20%2F0%2F0%2CNAPA%40%40%7C89b0ab68-18f2-4e1c-ad8a-3e8332bbb70b-464210513_titles%2F1%2F%2Ftransformer%20last%20%2F0%2F0%2Cunknown%2C%2C89b0ab68-18f2-4e1c-ad8a-3e8332bbb70b-464210513%7C1%2CtitlesResults%2C80164399">Click here</a>
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

export default Top10