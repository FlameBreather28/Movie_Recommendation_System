import React from "react";
import Navbar from "./../../../Navbar";
import T2 from "./T2.jpg";
import { Link,useNavigate } from "react-router-dom";

function Top2() {
  const navigate = useNavigate();
    const url = "http://localhost:9000/currentmoviedata"

    async function sendDataToBackend(a) {
        a.preventDefault();
         let movieName="The Wolf of Wall Street"
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
  return (
    <>
      <Navbar />
      <div className="detailed-movie-info">
        <div className="detailed-movie-info-image">
          <img src={T2} alt="" />
        </div>
        <div className="detailed-movie-info-all">
          <div className="detailed-move-info-all-data">
            <p>
              <h3>Title : </h3>The Wolf of Wall Street
            </p>
          </div>
          <div className="detailed-move-info-all-data">
            <p>
              {" "}
              <h3>RuntimeMins :</h3> 180
            </p>
          </div>
          <div className="detailed-move-info-all-data">
            <p>
              <h3>Plot : </h3> Based on the true story of Jordan Belfort, from
              his rise to a wealthy stock-broker living the high life to his
              fall involving crime, corruption and the federal government.
            </p>
          </div>

          <div className="detailed-move-info-all-data">
            <p>
              <h3>Stars :</h3>Martin Scorsese, Leonardo DiCaprio, Jonah Hill,
              Margot Robbie, Matthew McConaughey
            </p>
          </div>
          <div className="detailed-move-info-all-data">
            <p>
              <h3>Genres :</h3>Biography, Comedy, Crime
            </p>
          </div>

          <div className="detailed-move-info-all-data">
            <p>
              <h3>ImDbRating :</h3>8.2
            </p>
          </div>
          {/* niche vale 3 div  */}
          <div className="detailed-move-info-all-data">
                        <p>
                            <h3>Trailer : </h3>
                            <Link    
                                to="/trailer"
                                state={{
                                    url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/iszwuX1AK6A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
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
                            <a href="https://soap2day.to/MczozMDoiMzY2fHwxMDMuNzYuNTcuMTA3fHwxNjY0OTg2MzA2Ijs.html">Click here</a>
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
  );
}

export default Top2;
