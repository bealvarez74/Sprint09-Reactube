import axios from 'axios';
const KEY = 'AIzaSyCx6QQp1RgYzgXRRBM-edpF8yD0rm0xXy8';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
        part:'snippet',
        maxResults:5,
        key: KEY
    }
})