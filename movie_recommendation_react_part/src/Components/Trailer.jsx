import React from 'react'
import { useLocation } from "react-router-dom";

import parse from "html-react-parser";

function Trailer() {
  const location = useLocation();
  const trailerUrl=location.state.url;
  console.log(trailerUrl)


  return (<>

  {parse(trailerUrl)}
<div className='returnBackToHome'>
  <a href='http://localhost:3000'>click to return to Home page</a>
</div>

  </>
  )
}

export default Trailer