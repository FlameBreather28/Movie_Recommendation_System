import React from 'react';
import Navbar from './../../../Navbar';
import H1 from './Holly1.jpg'
import { Link } from "react-router-dom";


function Holly1() {
    return (<>
        <Navbar />
        <div className="detailed-movie-info">
            <div className="detailed-movie-info-image">
                <img src={H1} alt="" />
            </div>
            <div className="detailed-movie-info-all">
                <div className="detailed-move-info-all-data">
                    <p><h3>Title :  </h3>Top Gun: Maverick</p>
                </div>
                <div className="detailed-move-info-all-data"><p> <h3>RuntimeMins :</h3> 130</p></div>
                <div className="detailed-move-info-all-data"><p>
                    <h3>Plot :  </h3> After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must
                    confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate
                    sacrifice from those chosen to fly it.</p></div>
                <div className="detailed-move-info-all-data"><p>
                    <h3>Awards :  </h3>Top rated movie #66 | Awards, 9 nominations</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>Stars :
                    </h3>Tom Cruise, Jennifer Connelly, Miles Teller</p></div>

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
                                    url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/giXco2jaZ_4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
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
                            <a href="https://wu.thesoap2day.com/movies/top-gun-maverick-PecBIa/">Click here</a>
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

export default Holly1