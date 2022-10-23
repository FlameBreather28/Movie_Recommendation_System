import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <BrowserRouter>
  {console.log("Index.html  page is Rendered at http://localhost:3000")}
  <App/>
  </BrowserRouter>

)

