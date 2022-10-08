import React from 'react';
import Navbar from './../../../Navbar';
import H6 from './Holly6.jpg'
import { Link } from "react-router-dom";

function Holly6() {
    return (<>
        <Navbar />
        <div className="detailed-movie-info">
            <div className="detailed-movie-info-image">
                <img src={H6} alt="" />
            </div>
            <div className="detailed-movie-info-all">
                <div className="detailed-move-info-all-data">
                    <p><h3>Title :  </h3>Harry Potter and the Deathly Hallows: Part 2</p>
                </div>
                <div className="detailed-move-info-all-data"><p> <h3>RuntimeMins :</h3> 130</p></div>
                <div className="detailed-move-info-all-data"><p>
                    <h3>Plot :  </h3> </p>Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.</div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>Stars :
                    </h3>David Yates, Daniel Radcliffe, Emma Watson, Rupert Grint, Michael Gambon</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>Genres :
                    </h3> Adventure, Fantasy, Mystery</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>ImDbRating :
                    </h3>8.1</p></div>

                {/* niche vale 3 div  */}
                <div className="detailed-move-info-all-data">
                        <p>
                            <h3>Trailer : </h3>
                            <Link    
                                to="/trailer"
                                state={{
                                    url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/mObK5XD8udk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
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

export default Holly6