import React from 'react';
import Navbar from './../../../Navbar';
import H1 from './Hin1.jpg'
import { Link ,useNavigate} from "react-router-dom";


function Hin1() {
    const navigate = useNavigate();
    const url = "http://localhost:9000/currentmoviedata"

    async function sendDataToBackend(a) {
        a.preventDefault();
         let movieName="The Kashmir Files"
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                movieTitle: movieName,
            }),
            mode: "cors",
            headers: { "Content-type": "application/json;charset=utf-8" }
        }
        )
            .then((res) => res.json())
            // .then(res=>console.log(res))
            .then((res) => {
                console.log(res)
                console.log(typeof (res))
                navigate('/recommendationToUser', { state: res })
            })


    }




    return (<>
        <Navbar />
        <div className="detailed-movie-info">
            <div className="detailed-movie-info-image">
                <img src={H1} alt="" />
            </div>
            <div className="detailed-movie-info-all">
                <div className="detailed-move-info-all-data">
                    <p><h3>Title :  </h3>The Kashmir Files</p>
                </div>
                <div className="detailed-move-info-all-data"><p> <h3>RuntimeMins :</h3> 170</p></div>
                <div className="detailed-move-info-all-data"><p>
                    <h3>Plot :  </h3> A heart-wrenching tale that captures the pain, suffering, and struggle of the Kashmiri Pandit community in 1990 and leads Krishna, a young college student, to set out on a quest to uncover the truth.</p></div>
                <div className="detailed-move-info-all-data"><p>
                    <h3>Stars :
                    </h3>Vivek Agnihotri, Mithun Chakraborty, Anupam Kher, Darshan Kumaar, Pallavi Joshi</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>Genres :
                    </h3> Drama</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>ImDbRating :
                    </h3>8.3</p></div>


                {/* niche vale 3 div  */}
                <div className="detailed-move-info-all-data">
                    <p>
                    <h3>Trailer:</h3>
                        <Link
                            to="/trailer"
                            state={{
                                url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/A179apttY58" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
                            }} className="trailerLink" >
                            Click here
                        </Link>
                    </p>
                </div>
                {/* 
                    <div className="detailed-move-info-all-data">
                        <p>
                            <h3>Watch Movie here: </h3>
                            <a href="https://www.primevideo.com/detail/0QH32UG7NRSFRGZT78NFD6KED7/ref=atv_sr_def_c_tHQnnV_brws_1_3">Click here</a>
                        </p>
                    </div> */}

                <div className="detailed-move-info-all-data">
                    <form  onSubmit={sendDataToBackend} >
                        <button type="submit" >Recommend Movie on Current Title</button>
                    </form>
                </div>

            </div>
        </div>
    </>
    )
}

export default Hin1