import React from 'react';
import Navbar from './../../../Navbar';
import T8 from './T8.jpg'
import { Link } from "react-router-dom";

function Top8() {
    return (<>
        <Navbar />
        <div className="detailed-movie-info">
            <div className="detailed-movie-info-image">
                <img src={T8} alt="" />
            </div>
            <div className="detailed-movie-info-all">
                <div className="detailed-move-info-all-data">
                    <p><h3>Title :  </h3>Interstellar
</p>
                </div>
                <div className="detailed-move-info-all-data"><p> <h3>RuntimeMins :</h3> 137</p></div>
                <div className="detailed-move-info-all-data"><p>
                    <h3>Plot :  </h3> In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.</p></div>
                
                <div className="detailed-move-info-all-data"><p>
                    <h3>Stars :
                    </h3>James Mangold, Hugh Jackman, Patrick Stewart, Dafne Keen, Boyd Holbrook</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>Genres :
                    </h3>Adventure, Drama, Sci-Fi</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>ImDbRating :
                    </h3>8.1</p></div>

                {/* niche vale 3 div  */}
                <div className="detailed-move-info-all-data">
                        <p>
                            <h3>Trailer : </h3>
                            <Link    
                                to="/trailer"
                                state={{
                                    url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Div0iP65aZo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
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
                            <a href="https://soap2day.to/MczoyOToiNzN8fDEwMy43Ni41Ny4xMDd8fDE2NjQ5ODcwNjAiOw.html">Click here</a>
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

export default Top8