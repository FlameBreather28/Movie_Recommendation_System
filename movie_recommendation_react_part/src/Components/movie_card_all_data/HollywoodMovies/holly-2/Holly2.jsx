import React from 'react';
import Navbar from './../../../Navbar';
import H2 from './Holly2.jpg'
import { Link } from "react-router-dom";


function Holly2() {
    return (<>
        <Navbar />
        <div className="detailed-movie-info">
            <div className="detailed-movie-info-image">
                <img src={H2} alt="" />
            </div>
            <div className="detailed-movie-info-all">
                <div className="detailed-move-info-all-data">
                    <p><h3>Title :  </h3>The Dark Knight Rises</p>
                </div>
                <div className="detailed-move-info-all-data"><p> <h3>RuntimeMins :</h3> 164</p></div>
                <div className="detailed-move-info-all-data"><p>
                    <h3>Plot :  </h3> Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>Stars :
                    </h3>Christopher Nolan, Christian Bale, Tom Hardy, Anne Hathaway, Gary Oldman</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>Genres :
                    </h3> Action, Drama</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>ImDbRating :
                    </h3>8.4</p></div>

                {/* niche vale 3 div  */}
                <div className="detailed-move-info-all-data">
                        <p>
                            <h3>Trailer : </h3>
                            <Link    
                                to="/trailer"
                                state={{
                                    url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/GokKUqLcvD8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
                                }}
                            >
                                Click here
                            </Link>
                        </p>
                    </div>
{/* 
                    <div className="detailed-move-info-all-data">
                        <p>
                            <h3>Watch Movie here: </h3>
                            <a href="https://www.netflix.com/watch/70213514?trackId=255824129&tctx=0%2C1%2CNAPA%40%40%7Cdcf03d7a-98f3-4ccc-a0c8-2d62fcc40068-11464552_titles%2F1%2F%2Fthe%20dark%20%2F0%2F0%2CNAPA%40%40%7Cdcf03d7a-98f3-4ccc-a0c8-2d62fcc40068-11464552_titles%2F1%2F%2Fthe%20dark%20%2F0%2F0%2Cunknown%2C%2Cdcf03d7a-98f3-4ccc-a0c8-2d62fcc40068-11464552%7C1%2CtitlesResults%2C70213514">Click here</a>
                        </p>
                    </div> */}

                    <div className="detailed-move-info-all-data">
                        <form action="" method="POST" >
                            <button  type="submit" >Recommend Movie on Current Title</button>
                        </form>
                    </div>
    
            </div>
        </div>
    </>
    )
}

export default Holly2