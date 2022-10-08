import React from 'react';
import Navbar from './../../../Navbar';
import H8 from './Holly8.jpg'
import { Link } from "react-router-dom";

function Holly8() {
    return (<>
        <Navbar />
        <div className="detailed-movie-info">
            <div className="detailed-movie-info-image">
                <img src={H8} alt="" />
            </div>
            <div className="detailed-movie-info-all">
                <div className="detailed-move-info-all-data">
                    <p><h3>Title :  </h3>The Martian</p>
                </div>
                <div className="detailed-move-info-all-data"><p> <h3>RuntimeMins :</h3> 144</p></div>
                <div className="detailed-move-info-all-data"><p>
                    <h3>Plot :  </h3> An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive and can survive until a potential rescue.</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>Stars :
                    </h3>Ridley Scott, Matt Damon, Jessica Chastain, Kristen Wiig, Kate Mara</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>Genres :
                    </h3> Adventure, Drama, Sci-Fi</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>ImDbRating :
                    </h3>8.0</p></div>

                {/* niche vale 3 div  */}
                <div className="detailed-move-info-all-data">
                        <p>
                            <h3>Trailer : </h3>
                            <Link    
                                to="/trailer"
                                state={{
                                    url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ej3ioOneTy8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
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
                            <a href="https://wu.thesoap2day.com/movies/the-martian/">Click here</a>
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

export default Holly8