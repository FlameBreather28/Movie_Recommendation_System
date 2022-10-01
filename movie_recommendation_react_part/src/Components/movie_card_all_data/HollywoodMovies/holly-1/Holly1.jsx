import React from 'react';
import Navbar from './../../../Navbar';
import H1 from './Holly1.jpg'


function Holly1() {
    return (<>
        <Navbar />
        <div className="detailed-movie-info">
            <div className="detailed-movie-info-image">
                <img src={H1} alt="" />
            </div>
            <div className="detailed-movie-info-all">
                <div className="detailed-move-info-all-data">
                    <p><h3>Title :  </h3>Top Gun: Maverick</p>
                </div>
                <div className="detailed-move-info-all-data"><p> <h3>RuntimeMins :</h3> 130</p></div>
                <div className="detailed-move-info-all-data"><p>
                    <h3>Plot :  </h3> After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must
                    confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate
                    sacrifice from those chosen to fly it.</p></div>
                <div className="detailed-move-info-all-data"><p>
                    <h3>Awards :  </h3>Top rated movie #66 | Awards, 9 nominations</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>Stars :
                    </h3>Tom Cruise, Jennifer Connelly, Miles Teller</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>Genres :
                    </h3> Action, Drama</p></div>

                <div className="detailed-move-info-all-data"><p>
                    <h3>ImDbRating :
                    </h3>8.4</p></div>

                <div className="detailed-move-info-all-data"> <p>
                    <h3>Trailer :  </h3><a href="https://www.imdb.com/video/imdb/vi632472089/imdb/embed"> View trialer</a></p></div>

            </div>
        </div>
    </>
    )
}

export default Holly1