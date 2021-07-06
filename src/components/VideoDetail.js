import React from 'react';

const VideoDetail =({video}) => {
    if (!video){
        return <div>
            <h1>hola</h1>
            <p>adiós</p>
        </div>
    }

const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
console.log(typeof video);
return (
    <div>
        <div>
            <iframe src={videoSrc} allowFullScreen title="Video player"/>
        </div>
        <div>
            <h4>{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
    </div>
);

};

export default VideoDetail;