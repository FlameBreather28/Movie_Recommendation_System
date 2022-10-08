import React from 'react';
import Navbar from './../../../Navbar';
import H4 from './Hin4.jpg'
import { Link } from "react-router-dom";


function Hin4() {
    return (<>
        <Navbar />
        <div className="detailed-movie-info">
            <div className="detailed-movie-info-image">
                <img src={H4} alt="" />
            </div>
            <div className="detailed-movie-info-all">
                <div className="detailed-move-info-all-data">
                    <p><h3>Title :  </h3>Laal Singh Chaddha</p>
                </div>
                <div className="detailed-move-info-all-data"><p> <h3>RuntimeMins :</h3> 159</p></div>
                <div className="detailed-move-info-all-data"><p>
                    <h3>Plot :  </h3> Laal Singh Chaddha, a simple man whose extraordinary journey will fill you with love, warmth, happiness and will also make you laugh.</p></div>
                <div className="detailed-move-info-all-data"><p>
                    <h3>Stars :
                    </h3>Advait Chandan, Aamir Khan, Ahmad Ibn Umar, Kareena Kapoor, Hafsa Ashraf</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>Genres :
                    </h3> Comedy, Drama, Romance</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>ImDbRating :
                    </h3>5.0</p></div>

                 {/* niche vale 3 div  */}
                 <div className="detailed-move-info-all-data">
                        <p>
                            <h3>Trailer : </h3>
                            <Link    
                                to="/trailer"
                                state={{
                                    url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/R6savS7m0Fg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
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

export default Hin4