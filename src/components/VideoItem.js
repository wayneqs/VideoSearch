import React from "react";
import "./VideoItem.css";

const unescape = (str) => {
  return str.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec));
};

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={unescape(video.snippet.title)}
      />
      <div className="content">
        <div className="header">{unescape(video.snippet.title)}</div>
      </div>
    </div>
  );
};

export default VideoItem;
