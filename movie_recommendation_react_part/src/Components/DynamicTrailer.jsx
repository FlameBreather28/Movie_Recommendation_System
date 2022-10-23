import React, { useEffect, useState } from 'react'
import { useLocation,useNavigate } from 'react-router'

function DynamicTrailer() {
    const navigate=useNavigate();
    const location = useLocation();
    let id = location.state.id;
    let [Url, setUrl] = useState('');
    useEffect(() => {
       
            fetch(`https://imdb-api.com/en/API/YouTubeTrailer/k_ub0qd14u/${id}`)
                .then(response => response.json())
                .then(result => {
                      console.log(result)
                     console.log(typeof(result['videoUrl']))
                     let youtubeLink=result['videoUrl'];
                     let str1=youtubeLink.slice(0,24)
                     let str2=youtubeLink.slice(32,youtubeLink.length)
                     console.log(str1,"--",str2)
                     let completeYTUrl=`${str1}embed/${str2}`
                    console.log(typeof(completeYTUrl),completeYTUrl)

                   
                    let completeLinkWithIFrame=  `<iframe width="560" height="315" src=${completeYTUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`


                    // setUrl(typeof(result['videoUrl']))
                   
                    // const urlInString = JSON.stringify(result['videoUrl']);
                    // console.log(urlInString)



                    // state={{
                    //     url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/A179apttY58" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
                    // }}

                //     <Link    
                //     to="/trailer"
                    // state={{
                    //     url:,
                    // }}
                // >
             
                navigate('/trailer',{state:{url:completeLinkWithIFrame}})

                }
                )
                .catch(error => console.log('error', error));
    
      

    }, [])

    return (
        <>

            <div>Loading Trailer......</div>

        </>

    )
}

export default DynamicTrailer