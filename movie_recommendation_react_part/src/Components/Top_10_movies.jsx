import React from 'react'
import { useNavigate } from "react-router-dom";

import imgTop1 from './movie_card_all_data/Top10Movies/t-1/T1.jpg'
import imgTop2 from './movie_card_all_data/Top10Movies/t-2/T2.jpg'
import imgTop3 from './movie_card_all_data/Top10Movies/t-3/T3.jpg'
import imgTop4 from './movie_card_all_data/Top10Movies/t-4/T4.jpg'
import imgTop5 from './movie_card_all_data/Top10Movies/t-5/T5.jpg'
import imgTop6 from './movie_card_all_data/Top10Movies/t-6/T6.jpg'
import imgTop7 from './movie_card_all_data/Top10Movies/t-7/T7.jpg'
import imgTop8 from './movie_card_all_data/Top10Movies/t-8/T8.jpg'
import imgTop9 from './movie_card_all_data/Top10Movies/t-9/T9.jpg'
import imgTop10 from './movie_card_all_data/Top10Movies/t-10/T10.jpg'

export default function Top_10_movies() {

    const history = useNavigate()

    const checkWhichCard = (e) => {
        // console.dir(e.target.parentElement.parentElement)
        let targetParentElement = e.target.parentElement.parentElement.className.slice(-8)
        console.log(targetParentElement)
        if (targetParentElement === 'TopCard1') {
            history("/Top1")
        } else if (targetParentElement === 'TopCard2') {
            history("/Top2")
        } else if (targetParentElement === 'TopCard3') {
            history("/Top3")
        } else if (targetParentElement === 'TopCard4') {
            history("/Top4")
        } else if (targetParentElement === 'TopCard5') {
            history("/Top5")
        } else if (targetParentElement === 'TopCard6') {
            history("/Top6")
        } else if (targetParentElement === 'TopCard7') {
            history("/Top7")
        } else if (targetParentElement === 'TopCard8') {
            history("/Top8")
        } else if (targetParentElement === 'TopCard9') {
            history("/Top9")
        } else if (targetParentElement === 'opCard10') {
            history("/Top10")
        } 
        else {
            console.log("wrong path")
        }


    }







  return (
    <div className="top10-movies" id="Top 10">
        <h1>Top 10 movies</h1>

        <div className="movie-cards TopCard1" onClick={checkWhichCard}>
            <div className="movies-cards-image" >
                <img srcSet={imgTop1} alt=""/>
            </div>
            <div className="movies-cards-title">
                <h3>Interstellar</h3>
                <h5>2014</h5>
            </div>
        </div>

        <div className="movie-cards TopCard2" onClick={checkWhichCard}>
            <div className="movies-cards-image">
                <img srcSet={imgTop2} alt=""/>
            </div>
            <div className="movies-cards-title">
                <h3>The Wolf of Wall Street</h3>
                <h5>2013</h5>

            </div>
        </div>

        <div className="movie-cards TopCard3" onClick={checkWhichCard}>
            <div className="movies-cards-image">
                <img srcSet={imgTop3} alt=""/>
            </div>
            <div className="movies-cards-title">
                <h3>Joker</h3>
                <h5>2019</h5>

            </div>
        </div>

        <div className="movie-cards TopCard4" onClick={checkWhichCard}>
            <div className="movies-cards-image">
                <img srcSet={imgTop4} alt=""/>
            </div>
            <div className="movies-cards-title">
                <h3>Avengers: Endgame</h3>
                <h5>2019</h5>

            </div>
        </div>

        <div className="movie-cards TopCard5" onClick={checkWhichCard}>
            <div className="movies-cards-image">
                <img srcSet={imgTop5} alt=""/>
            </div>
            <div className="movies-cards-title">
                <h3>Avengers: Infinity War</h3>
                <h5>2018</h5>

            </div>
        </div>


        <div className="movie-cards TopCard6" onClick={checkWhichCard}>
            <div className="movies-cards-image">
                <img srcSet={imgTop6} alt=""/>
            </div>
            <div className="movies-cards-title">
                <h3>Harry Potter and the Deathly Hallows: Part 2</h3>
                <h5>2011</h5>

            </div>
        </div>

        <div className="movie-cards TopCard7" onClick={checkWhichCard}>
            <div className="movies-cards-image">
                <img srcSet={imgTop7} alt=""/>
            </div>
            <div className="movies-cards-title">
                <h3>Parasite</h3>
                <h5>2019</h5>

            </div>
        </div>

        <div className="movie-cards TopCard8" onClick={checkWhichCard}>
            <div className="movies-cards-image">
                <img srcSet={imgTop8} alt=""/>
            </div>
            <div className="movies-cards-title">
                <h3>Logan</h3>
                <h5>2017</h5>

            </div>
        </div>

        <div className="movie-cards TopCard9" onClick={checkWhichCard}>
            <div className="movies-cards-image">
                <img srcSet={imgTop9} alt=""/>
            </div>
            <div className="movies-cards-title">
                <h3>Spider-Man: No Way Home</h3>
                <h5>2021</h5>

            </div>
        </div>

        <div className="movie-cards TopCard10" onClick={checkWhichCard}>
            <div className="movies-cards-image">
                <img srcSet={imgTop10} alt=""/>
            </div>
            <div className="movies-cards-title">
                <h3>Transformers: The Last Knight</h3>
                <h5>2017</h5>

            </div>
        </div>
    </div>
  )
}
