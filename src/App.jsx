import React, { useState } from "react";
import "./App.css"
import Service from "./Components/Service"
import JSON from "./videos.json"
import Nav from "./Components/Nav"

let App = () =>{
  let [State,setState] = useState(JSON)
  let [Video,setVideo] = useState(JSON[0])
  let handleClick = (max)=>{
    setVideo(max)
  }
  return(
    <div>
      <Nav></Nav>
      <div className="main">
      <Service State={State} Video={Video} play={handleClick}></Service>
      </div>
    </div>
  )
}

export default App