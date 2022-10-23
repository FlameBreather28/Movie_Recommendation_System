import React from 'react';
import Navbar from './../../../Navbar';
import T9 from './T9.jpg'
import { Link,useNavigate } from "react-router-dom";

function Top9() {
    const navigate = useNavigate();
    const url = "http://localhost:9000/currentmoviedata"

    async function sendDataToBackend(a) {
        a.preventDefault();
         let movieName="Spider-Man: No Way Home"
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
                <img src={T9} alt="" />
            </div>
            <div className="detailed-movie-info-all">
                <div className="detailed-move-info-all-data">
                    <p><h3>Title :  </h3>Spider-Man: No Way Home</p>
                </div>
                <div className="detailed-move-info-all-data"><p> <h3>RuntimeMins :</h3> 148</p></div>
                <div className="detailed-move-info-all-data"><p>
                    <h3>Plot :  </h3>With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.</p></div>
                
                <div className="detailed-move-info-all-data"><p>
                    <h3>Stars :
                    </h3>Jon Watts, Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>Genres :
                    </h3>Action, Adventure, Fantasy</p></div>

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
                                    url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/JfVOs4VSpmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
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
                            <a href="https://www.netflix.com/watch/81465707?trackId=255824129&tctx=0%2C0%2CNAPA%40%40%7C89b0ab68-18f2-4e1c-ad8a-3e8332bbb70b-464042983_titles%2F1%2F%2Fspider%20no%20way%20home%2F0%2F0%2CNAPA%40%40%7C89b0ab68-18f2-4e1c-ad8a-3e8332bbb70b-464042983_titles%2F1%2F%2Fspider%20no%20way%20home%2F0%2F0%2Cunknown%2C%2C89b0ab68-18f2-4e1c-ad8a-3e8332bbb70b-464042983%7C1%2CtitlesResults%2C81465707">Click here</a>
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

export default Top9