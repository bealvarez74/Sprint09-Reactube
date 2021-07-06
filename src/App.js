import React from 'react';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';


class App extends React.Component {
    state={
      videos:[],
      selectedVideo: null
    }

    handleSubmit = async (termFromSearchBar) => {
      const response = await youtube.get('/search',{
        params:{
          q:termFromSearchBar
        }
      })

      this.setState({
        videos: response.data.items
      })
      console.log("this is resp",response);
    };

    handleVideoSelect = (video) => {
      this.setState({selectedVideo: video})
    }

  render() {
    return (
      <div>
        <SearchBar handleFormSubmit={this.handleSubmit}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
      </div>
    )
  }
}
export default App;
