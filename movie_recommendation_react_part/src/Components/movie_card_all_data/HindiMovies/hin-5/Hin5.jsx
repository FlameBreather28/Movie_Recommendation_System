import React from 'react';
import Navbar from './../../../Navbar';
import H5 from './Hin5.jpg'
import { Link,useNavigate } from "react-router-dom";


function Hin5() {
    const navigate = useNavigate();
    const url = "http://localhost:9000/currentmoviedata"

    async function sendDataToBackend(a) {
        a.preventDefault();
         let movieName="Shershaah"
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
                <img src={H5} alt="" />
            </div>
            <div className="detailed-movie-info-all">
                <div className="detailed-move-info-all-data">
                    <p><h3>Title :  </h3>Shershaah</p>
                </div>
                <div className="detailed-move-info-all-data"><p> <h3>RuntimeMins :</h3> 135</p></div>
                <div className="detailed-move-info-all-data"><p>
                    <h3>Plot :  </h3> Shershaah is the story of PVC awardee Indian soldier Capt. Vikram Batra, whose bravery and unflinching courage in chasing the Pakistani soldiers out of Indian territory contributed immensely in India finally winning the Kargil War in 1999.</p></div>
                <div className="detailed-move-info-all-data"><p>
                    <h3>Stars :
                    </h3>Vishnuvardhan, Sidharth Malhotra, Kiara Advani, Shiv Panditt, Pranay Pachauri</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>Genres :
                    </h3> Action, Biography, Drama</p></div>

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
                                    url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Q0FTXnefVBA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
                                }} className='trailerlink'
                            >
                                Click here
                            </Link>
                        </p>
                    </div>
{/* 
                    <div className="detailed-move-info-all-data">
                        <p>
                            <h3>Watch Movie here: </h3>
                            <a href="https://www.primevideo.com/detail/0J3P7DO2UHT2IGF8UY24C2I94C/ref=atv_sr_def_c_unkc_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B099NHRF82&qid=1664824397955">Click here</a>
                        </p>
                    </div> */}

                    <div className="detailed-move-info-all-data">
                        <form onSubmit={sendDataToBackend} >
                            <button  type="submit" >Recommend Movie on Current Title</button>
                        </form>
                    </div>

            </div>
        </div>
    </>
    )
}

export default Hin5