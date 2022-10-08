import React from 'react';
import Navbar from './../../../Navbar';
import H8 from './Hin8.jpg'
import { Link } from "react-router-dom";


function Hin8() {
    return (<>
        <Navbar />
        <div className="detailed-movie-info">
            <div className="detailed-movie-info-image">
                <img src={H8} alt="" />
            </div>
            <div className="detailed-movie-info-all">
                <div className="detailed-move-info-all-data">
                    <p><h3>Title :  </h3>Brahmastra Part One: Shiva</p>
                </div>
                <div className="detailed-move-info-all-data"><p> <h3>RuntimeMins :</h3> 167</p></div>
                <div className="detailed-move-info-all-data"><p>
                    <h3>Plot :  </h3>This is the story of Shiva who sets out in search of love and self-discovery. During his journey, he has to face many evil forces that threaten our existence.</p></div>
                <div className="detailed-move-info-all-data"><p>
                    <h3>Stars :
                    </h3>Ayan Mukerji, Ranbir Kapoor, Alia Bhatt, Amitabh Bachchan, Nagarjuna Akkineni</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>Genres :
                    </h3>Action, Adventure, Fantasy</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>ImDbRating :
                    </h3>5.6</p></div>

                {/* niche vale 3 div  */}
                <div className="detailed-move-info-all-data">
                        <p>
                            <h3>Trailer : </h3>
                            <Link    
                                to="/trailer"
                                state={{
                                    url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/V5jVntRVl-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
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

export default Hin8