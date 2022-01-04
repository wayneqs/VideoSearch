import React from "react";

const unescape = (str) => {
  return str.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec));
};

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed" data-source="youtube">
        <iframe title="Video Player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{unescape(video.snippet.title)}</h4>
        <p>{unescape(video.snippet.description)}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
