import React from 'react';

const VideoDetail =({video}) => {  
    if (!video){
        return <div>       
        </div>
    }
const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;    
console.log(typeof video);
return (
    <div>
        <div>
            <iframe style={{width:"100%", minHeight:"400px"}} src={videoSrc} allowFullScreen title="Video player"/>
        </div>
        <div>
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description}</p>
        </div>
    </div>
);
    
};

export default VideoDetail;