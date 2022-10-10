import React from 'react';
import Navbar from './../../../Navbar';
import H5 from './Holly5.jpg'
import { Link } from "react-router-dom";


function Holly5() {
    return (<>
        <Navbar />
        <div className="detailed-movie-info">
            <div className="detailed-movie-info-image">
                <img src={H5} alt="" />
            </div>
            <div className="detailed-movie-info-all">
                <div className="detailed-move-info-all-data">
                    <p><h3>Title :  </h3>Star Wars:The Force Awakens</p>
                </div>
                <div className="detailed-move-info-all-data"><p> <h3>RuntimeMins :</h3> 138</p></div>
                <div className="detailed-move-info-all-data"><p>
                    <h3>Plot :  </h3> </p>As a new threat to the galaxy rises,Rey,a desert scavenger,and Finn, an ex-stormtrooper,must join Han Solo and Chewbacca to search for the one hopeof restoring peace.</div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>Stars :
                    </h3>J.J.Abrams,Daisy Ridley, John Boyega,Oscar Isaac,Domhnall Gleeson</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>Genres :
                    </h3> Action, Adventure, Sci-Fi</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>ImDbRating :
                    </h3>7.8</p></div>

                {/* niche vale 3 div  */}
                <div className="detailed-move-info-all-data">
                        <p>
                            <h3>Trailer : </h3>
                            <Link    
                                to="/trailer"
                                state={{
                                    url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/sGbxmsDFVnE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
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

export default Holly5