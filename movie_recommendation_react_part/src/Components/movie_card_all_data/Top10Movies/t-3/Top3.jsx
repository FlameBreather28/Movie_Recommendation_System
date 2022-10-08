import React from 'react';
import Navbar from './../../../Navbar';
import T3 from './T3.jpg'
import { Link } from "react-router-dom";

function Top3() {
    return (<>
        <Navbar />
        <div className="detailed-movie-info">
            <div className="detailed-movie-info-image">
                <img src={T3} alt="" />
            </div>
            <div className="detailed-movie-info-all">
                <div className="detailed-move-info-all-data">
                    <p><h3>Title :  </h3>Joker</p>
                </div>
                <div className="detailed-move-info-all-data"><p> <h3>RuntimeMins :</h3> 122</p></div>
                <div className="detailed-move-info-all-data"><p>
                    <h3>Plot :  </h3>A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.</p></div>
                
                <div className="detailed-move-info-all-data"><p>
                    <h3>Stars :
                    </h3>Todd Phillips, Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>Genres :
                    </h3>Crime, Drama, Thriller</p></div>

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
                                    url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/zAGVQLHvwOY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
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
                            <a href="https://soap2day.to/MczozMToiNjQxN3x8MTAzLjc2LjU3LjEwN3x8MTY2NDk4NjQ5MSI7.html">Click here</a>
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

export default Top3