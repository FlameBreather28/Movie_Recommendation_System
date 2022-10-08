import React from 'react'
import { useLocation } from "react-router-dom";

import parse from "html-react-parser";

function Trailer() {
  const location = useLocation();
  const trailerUrl=location.state.url;
  console.log(trailerUrl)

  return (<>
  
  {parse(trailerUrl)}


  </>
  )
}

export default Trailer