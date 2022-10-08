import React from 'react';
import Navbar from './../../../Navbar';
import T5 from './T5.jpg'
import { Link } from "react-router-dom";

function Top5() {
    return (<>
        <Navbar />
        <div className="detailed-movie-info">
            <div className="detailed-movie-info-image">
                <img src={T5} alt="" />
            </div>
            <div className="detailed-movie-info-all">
                <div className="detailed-move-info-all-data">
                    <p><h3>Title :  </h3>Avengers: Infinity War</p>
                </div>
                <div className="detailed-move-info-all-data"><p> <h3>RuntimeMins :</h3> 149</p></div>
                <div className="detailed-move-info-all-data"><p>
                    <h3>Plot :  </h3>The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.</p></div>
                
                <div className="detailed-move-info-all-data"><p>
                    <h3>Stars :
                    </h3>Anthony Russo, Joe Russo, Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>Genres :
                    </h3>Action, Adventure, Sci-Fi</p></div>

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
                                    url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/6ZfuNTqbHE8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
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
                            <a href="">Click here</a>
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

export default Top5