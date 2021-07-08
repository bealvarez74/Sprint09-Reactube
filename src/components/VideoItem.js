import React from 'react';
import {VideoElement} from '../styled';

const VideoItem = ({video, handleVideoSelect}) => {
    return (
        <VideoElement onClick={() => handleVideoSelect(video)}>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <p>{video.snippet.title}</p>
        </VideoElement>
    )
};

export default VideoItem;