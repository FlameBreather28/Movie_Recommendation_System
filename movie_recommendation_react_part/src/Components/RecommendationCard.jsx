import React,{useEffect,useState} from 'react'

function RecommendationCard(props) {
    let id = props.id;
    console.log("props:", id)
    let [title, changeTitle] = useState("");
    let [image, changeImage] = useState("");

    useEffect(() => {
        console.log('working in useEffect')
        fetch(`https://imdb-api.com/en/API/Title/k_ub0qd14u/${id}`)
        .then((Response) => Response.json())
        // .then(h=>console.log("work",h))
        .then((data) => {

            // console.log("hello", data)
            let { title, image } = data
            console.log(title)
            changeTitle(title)
            changeImage(image)


        }).catch(error=>console.log(error))


    },[])
  return (
    <>
         <div className="movie-cards " >
                <div className="movies-cards-image">
                    <img srcSet={image} alt="movie-img" />
                </div>
                <div className="movies-cards-title">
                    <h3> {title}</h3>
                </div>
             </div>
     </>

        
  )
}

export default RecommendationCard