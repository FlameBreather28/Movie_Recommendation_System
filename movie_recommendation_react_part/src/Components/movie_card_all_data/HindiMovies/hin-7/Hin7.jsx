import React from 'react';
import Navbar from './../../../Navbar';
import H7 from './Hin7.jpg'
import { Link } from "react-router-dom";


function Hin7() {
    return (<>
        <Navbar />
        <div className="detailed-movie-info">
            <div className="detailed-movie-info-image">
                <img src={H7} alt="" />
            </div>
            <div className="detailed-movie-info-all">
                <div className="detailed-move-info-all-data">
                    <p><h3>Title :  </h3>Baahubali 2: The Conclusion</p>
                </div>
                <div className="detailed-move-info-all-data"><p> <h3>RuntimeMins :</h3> 167</p></div>
                <div className="detailed-move-info-all-data"><p>
                    <h3>Plot :  </h3> When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom.</p></div>
                <div className="detailed-move-info-all-data"><p>
                    <h3>Stars :
                    </h3>S.S. Rajamouli, Prabhas, Rana Daggubati, Anushka Shetty, Tamannaah Bhatia</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>Genres :
                    </h3>Action, Drama</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>ImDbRating :
                    </h3>8.2</p></div>

                {/* niche vale 3 div  */}
                <div className="detailed-move-info-all-data">
                        <p>
                            <h3>Trailer : </h3>
                            <Link    
                                to="/trailer"
                                state={{
                                    url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/G62HrubdD6o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
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
                            <a href="https://www.netflix.com/watch/80203996?trackId=255824129&tctx=0%2C0%2CNAPA%40%40%7C4977d172-6709-43d0-919b-b05c286a00e5-15557634_titles%2F1%2F%2Fbha%2F0%2F0%2CNAPA%40%40%7C4977d172-6709-43d0-919b-b05c286a00e5-15557634_titles%2F1%2F%2Fbha%2F0%2F0%2Cunknown%2C%2C4977d172-6709-43d0-919b-b05c286a00e5-15557634%7C1%2CtitlesResults%2C80203996">Click here</a>
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

export default Hin7