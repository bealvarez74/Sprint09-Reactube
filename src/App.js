import React from 'react';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import {Body, Header, Content, Maincontent, Sidebar} from './styled';


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
        <Body>
          <Header><SearchBar handleFormSubmit={this.handleSubmit}/></Header>
          <Content>
            <Maincontent><VideoDetail video={this.state.selectedVideo}/></Maincontent>
            <Sidebar><VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/> </Sidebar>
          </Content>
        </Body>
    )
  }
}
export default App;
