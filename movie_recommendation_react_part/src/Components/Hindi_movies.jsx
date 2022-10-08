import React from 'react'
import { useNavigate } from "react-router-dom";

import imgHin1 from './movie_card_all_data/HindiMovies/hin-1/Hin1.jpg'
import imgHin2 from './movie_card_all_data/HindiMovies/hin-2/Hin2.jpg'
import imgHin3 from './movie_card_all_data/HindiMovies/hin-3/Hin3.jpg'
import imgHin4 from './movie_card_all_data/HindiMovies/hin-4/Hin4.jpg'
import imgHin5 from './movie_card_all_data/HindiMovies/hin-5/Hin5.jpg'
import imgHin6 from './movie_card_all_data/HindiMovies/hin-6/Hin6.jpg'
import imgHin7 from './movie_card_all_data/HindiMovies/hin-7/Hin7.jpg'
import imgHin8 from './movie_card_all_data/HindiMovies/hin-8/Hin8.jpg'



export default function Hindi_movies() {

    const history = useNavigate()

    const checkWhichCard = (e) => {
        // console.dir(e.target.parentElement.parentElement)
        let targetParentElement = e.target.parentElement.parentElement.className.slice(-8)
        // console.log(targetParentElement)
        if (targetParentElement === 'HinCard1') {
            history("/Hin1")
        } else if (targetParentElement === 'HinCard2') {
            history("/Hin2")
        } else if (targetParentElement === 'HinCard3') {
            history("/Hin3")
        } else if (targetParentElement === 'HinCard4') {
            history("/Hin4")
        } else if (targetParentElement === 'HinCard5') {
            history("/Hin5")
        } else if (targetParentElement === 'HinCard6') {
            history("/Hin6")
        } else if (targetParentElement === 'HinCard7') {
            history("/Hin7")
        } else if (targetParentElement === 'HinCard8') {
            history("/Hin8")
        } else {
            console.log("wrong path")
        }


    }





  return (
    <div className=" hindi-movies" id="Hindi">
        <h1>Hindi movies</h1>

        <div className="movie-cards HinCard1" onClick={checkWhichCard}>
            <div className="movies-cards-image">
                <img srcSet={imgHin1} alt=""/>
            </div>
            <div className="movies-cards-title">
                <h3>The Kashmir Files</h3>
                <h5>2022</h5>
            </div>
        </div>

        <div className="movie-cards HinCard2" onClick={checkWhichCard}>
            <div className="movies-cards-image">
                <img srcSet={imgHin2} alt=""/>
            </div>
            <div className="movies-cards-title">
                <h3>Jai Bhim</h3>
                <h5>2021</h5>
            </div>
        </div>

        <div className="movie-cards HinCard3" onClick={checkWhichCard}>
            <div className="movies-cards-image">
                <img srcSet={imgHin3} alt=""/>
            </div>
            <div className="movies-cards-title">
                <h3>Dangal</h3>
                <h5>2016</h5>
            </div>
        </div>

        <div className="movie-cards HinCard4" onClick={checkWhichCard}>
            <div className="movies-cards-image">
                <img srcSet={imgHin4} alt=""/>
            </div>
            <div className="movies-cards-title">
                <h3>Laal Singh Chaddha</h3>
                <h5>2022</h5>
            </div>
        </div>

        <div className="movie-cards HinCard5" onClick={checkWhichCard}>
            <div className="movies-cards-image">
                <img srcSet={imgHin5} alt=""/>
            </div>
            <div className="movies-cards-title">
                <h3>Shershaah</h3>
                <h5>2021</h5>
            </div>
        </div>


        <div className="movie-cards HinCard6" onClick={checkWhichCard}>
            <div className="movies-cards-image">
                <img srcSet={imgHin6} alt=""/>
            </div>
            <div className="movies-cards-title">
                <h3>Soorarai Pottru</h3>
                <h5>2020</h5>
            </div>
        </div>

        <div className="movie-cards HinCard7" onClick={checkWhichCard}> 
            <div className="movies-cards-image">
                <img srcSet={imgHin7} alt=""/>
            </div>
            <div className="movies-cards-title">
                <h3>Baahubali 2: The Conclusion</h3>
                <h5>2017</h5>
            </div>
        </div>

        <div className="movie-cards HinCard8" onClick={checkWhichCard}>
            <div className="movies-cards-image">
                <img srcSet={imgHin8} alt="" />
            </div>
            <div className="movies-cards-title">
                <h3>Brahmastra Part One: Shiva</h3>
                <h5>2022</h5>
            </div>
        </div>

    </div>
  )
}

