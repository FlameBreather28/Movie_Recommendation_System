import React from "react";
import { useNavigate } from "react-router-dom";
import imgHolly1 from "./movie_card_all_data/HollywoodMovies/holly-1/Holly1.jpg";
import imgHolly2 from "./movie_card_all_data/HollywoodMovies/holly-2/Holly2.jpg";
import imgHolly3 from "./movie_card_all_data/HollywoodMovies/holly-3/Holly3.jpg";
import imgHolly4 from "./movie_card_all_data/HollywoodMovies/holly-4/Holly4.jpg";
import imgHolly5 from "./movie_card_all_data/HollywoodMovies/holly-5/Holly5.jpg";
import imgHolly6 from "./movie_card_all_data/HollywoodMovies/holly-6/Holly6.jpg";
import imgHolly7 from "./movie_card_all_data/HollywoodMovies/holly-7/Holly7.jpg";
import imgHolly8 from "./movie_card_all_data/HollywoodMovies/holly-8/Holly8.jpg";

function Hollywood_movies() {
    const history = useNavigate();

    const checkWhichCard = (e) => {
        // console.dir(e.target.parentElement.parentElement)
        let targetParentElement =
            e.target.parentElement.parentElement.className.slice(-10);
        console.log(targetParentElement);
        if (targetParentElement === "HollyCard1") {
            history("/Holly1");
        } else if (targetParentElement === "HollyCard2") {
            history("/Holly2");
        } else if (targetParentElement === "HollyCard3") {
            history("/Holly3");
        } else if (targetParentElement === "HollyCard4") {
            history("/Holly4");
        } else if (targetParentElement === "HollyCard5") {
            history("/Holly5");
        } else if (targetParentElement === "HollyCard6") {
            history("/Holly6");
        } else if (targetParentElement === "HollyCard7") {
            history("/Holly7");
        } else if (targetParentElement === "HollyCard8") {
            history("/Holly8");
        } else {
            console.log("wrong path");
        }
    };

    return (
        <div className="hollywood-movies" id="Hollywood">
            <h1>Hollywood Movies</h1>
            <div className="movie-cards HollyCard1" onClick={checkWhichCard}>
                <div className="movies-cards-image">
                    <img srcSet={imgHolly1} alt="" />
                </div>
                <div className="movies-cards-title">
                    <h3>Top Gun: Maverick</h3>

                </div>
            </div>

            <div className="movie-cards HollyCard2" onClick={checkWhichCard}>
                <div className="movies-cards-image">
                    <img srcSet={imgHolly2} alt="" />
                </div>
                <div className="movies-cards-title">
                    <h3>The Dark Knight Rises</h3>
                </div>
            </div>

            <div className="movie-cards HollyCard3" onClick={checkWhichCard}>
                <div className="movies-cards-image">
                    <img srcSet={imgHolly3} alt="" />
                </div>
                <div className="movies-cards-title">
                    <h3>Guardians of the Galaxy</h3>                 </div>
            </div>

            <div className="movie-cards HollyCard4" onClick={checkWhichCard}>
                <div className="movies-cards-image">
                    <img srcSet={imgHolly4} alt="" />
                </div>
                <div className="movies-cards-title">
                    <h3>Deadpool</h3>
                </div>
            </div>

            <div className="movie-cards HollyCard5" onClick={checkWhichCard}>
                <div className="movies-cards-image">
                    <img srcSet={imgHolly5} alt="" />
                </div>
                <div className="movies-cards-title">
                    <h3>Star Wars: The Force Awakens</h3>
                </div>
            </div>

            <div className="movie-cards HollyCard6" onClick={checkWhichCard}>
                <div className="movies-cards-image">
                    <img srcSet={imgHolly6} alt="" />
                </div>
                <div className="movies-cards-title">
                    <h3>Harry Potter and the Deathly Hallows: Part 2</h3>
                </div>
            </div>

            <div className="movie-cards HollyCard7" onClick={checkWhichCard}>
                <div className="movies-cards-image">
                    <img srcSet={imgHolly7} alt="" />
                </div>
                <div className="movies-cards-title">
                    <h3>Avengers: Age of Ultron</h3>
                </div>
            </div>

            <div className="movie-cards HollyCard8" onClick={checkWhichCard}>
                <div className="movies-cards-image">
                    <img srcSet={imgHolly8} alt="" />
                </div>
                <div className="movies-cards-title">
                    <h3>The Martian</h3>
                </div>
            </div>
        </div>
    );
}

export default Hollywood_movies;
