import React from "react";

let VideoPlayer = (props) => {
  return (
      <div className="videocuurentlyrunning">
        <video src={props.data.videoUrl} autoPlay muted controls loop></video>
        <h2>{props.data.title}</h2>
      </div>
  );
};

export default VideoPlayer;
