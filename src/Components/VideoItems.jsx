import React from "react";

let VideoItems = (props) => {
  return (
    <div className="Vidplayer-main">
      <div className="video-list"onClick={() => {props.play(props.data);}}>
        <div className="thumbnail-div">
          <img src={props.data.thumbnailUrl} height={90} width={150} alt="" />
        </div>
        <div className="info-div">
          <h4>{props.data.title}</h4>
          <p>{props.data.author}</p>
          <span>{props.data.views} views </span>
          <p>{props.data.uploadTime}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoItems;
