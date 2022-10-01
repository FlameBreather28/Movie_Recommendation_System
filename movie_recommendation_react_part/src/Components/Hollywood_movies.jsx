import React from 'react'
import { useNavigate } from "react-router-dom";
import logo from './movie_card_all_data/HollywoodMovies/holly-1/Holly1.jpg'
function Hollywood_movies(){
    const history = useNavigate()
    const run=(e)=>{
        console.dir(e.target.parentElement.parentElement)
        if(e.target.parentElement.parentElement==='.hin-1')
        console.log('correct')
        else
        console.log("not corrects")
        // let par=e.closestParent()
        history("/H1")
    }
return(
    <div class="hollywood-movies" id="Hollywood">
    <h1>Hollywood Movies</h1>
    <div className="movie-cards hin-1 " onClick={run}>
        <div class="movies-cards-image" >
            <img src={logo} alt="" />
        </div>
        <div class="movies-cards-title">
            <h3>Thor: love and Thunder</h3>
        </div>
    </div>

    <div class="movie-cards">
        <div class="movies-cards-image">
            <img src="HollywoodMovies/h-2/h-2.jpg" alt="" />
        </div>
        <div class="movies-cards-title">
            <h3>Thor: love and Thunder</h3>
        </div>
    </div>

    <div class="movie-cards">
        <div class="movies-cards-image">
            <img src="HollywoodMovies/h-3/h-3.jpg" alt="" />
        </div>
        <div class="movies-cards-title">
            <h3>Thor: love and Thunder</h3>
        </div>
    </div>

    <div class="movie-cards">
        <div class="movies-cards-image">
            <img src="HollywoodMovies/h-4/h-4.jpg" alt="" />
        </div>
        <div class="movies-cards-title">
            <h3>Thor: love and Thunder</h3>
        </div>
    </div>

    <div class="movie-cards">
        <div class="movies-cards-image">
            <img src="HollywoodMovies/h-5/h-5.jpg" alt="" />
        </div>
        <div class="movies-cards-title">
            <h3>Thor: love and Thunder</h3>
        </div>
    </div>

    <div class="movie-cards">
        <div class="movies-cards-image">
            <img src="HollywoodMovies/h-6/h-6.jpg" alt="" />
        </div>
        <div class="movies-cards-title">
            <h3>Thor: love and Thunder</h3>
        </div>
    </div>

    <div class="movie-cards">
        <div class="movies-cards-image">
            <img src="HollywoodMovies/h-7/h-7.jpg" alt="" />
        </div>
        <div class="movies-cards-title">
            <h3>Thor: love and Thunder</h3>
        </div>
    </div>

    <div class="movie-cards">
        <div class="movies-cards-image">
            <img src="HollywoodMovies/h-8/h-8.jpg" alt="" />
        </div>
        <div class="movies-cards-title">
            <h3>Thor: love and Thunder</h3>
        </div>
    </div>

  
    
</div>

)
}

export default Hollywood_movies;