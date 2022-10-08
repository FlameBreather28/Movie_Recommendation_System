import React from 'react';
import Navbar from './../../../Navbar';
import H2 from './Hin2.jpg'
import { Link } from "react-router-dom";


function Hin2() {
    return (<>
        <Navbar />
        <div className="detailed-movie-info">
            <div className="detailed-movie-info-image">
                <img src={H2} alt="" />
            </div>
            <div className="detailed-movie-info-all">
                <div className="detailed-move-info-all-data">
                    <p><h3>Title :  </h3>Jai Bhim</p>
                </div>
                <div className="detailed-move-info-all-data"><p> <h3>RuntimeMins :</h3> 164</p></div>
                <div className="detailed-move-info-all-data"><p>
                    <h3>Plot :  </h3>When a tribal man is arrested for a case of alleged theft, his wife turns to a human-rights lawyer to help bring justice. </p></div>
                <div className="detailed-move-info-all-data"><p>
                    <h3>Stars :
                    </h3>T.J. Gnanavel, Suriya, Lijo Mol Jose, Manikandan K., Rajisha Vijayan</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>Genres :
                    </h3> Crime, Drama, Mystery</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>ImDbRating :
                    </h3>8.9</p></div>
                 {/* niche vale 3 div  */}
                 <div className="detailed-move-info-all-data">
                        <p>
                            <h3>Trailer : </h3>
                            <Link    
                                to="/trailer"
                                state={{
                                    url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/nnXpbTFrqXA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
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
                            <a href="https://www.primevideo.com/detail/0SWGQNS7I3QUVSVKQE0V3Q0O2V/ref=atv_sr_def_c_unkc_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B09K3VF28R&qid=1664822106526">Click here</a>
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

export default Hin2