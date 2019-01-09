import React, { Component } from 'react';
import YoutubePlaylistTemplate from './Youtube-playlist-template';

const channelId = 'UC7rqz5As19qYWl2Rc4z-iig';
const key = 'AIzaSyATb4ptZYFqwg1xarYjg8AR5pPKwU0I-4Y';
const part = 'snippet';
const maxResults = 12;

export default class YoutubePlaylistDirective extends Component{

  state = {}

  componentDidMount(){
    this._getYoutubePlaylist();
  }

  _renderYoutubePlaylist = () => {
    const videos = this.state.videos.map((video, i) => {
      return <YoutubePlaylistTemplate 
              key={i} 
              title={video.snippet.title} 
              date={video.snippet.publishedAt}
              link={'https://www.youtube.com/watch?v=' + video.id.videoId}
              image_link={video.snippet.thumbnails.high.url} />
    })

    return videos
  }

  _callAPI = () => {
    return fetch(`https://www.googleapis.com/youtube/v3/search?channelId=${channelId}&key=${key}&part=${part}&maxResults=${maxResults}`, {
      method: 'GET'
    }).then((response) => response.json())
      .then((responseJson) => responseJson.items)
      // .then((responseItems) => console.log(responseItems))
      .catch(err => console.log(err))
  }

  _getYoutubePlaylist = async () => {
    const videos = await this._callAPI();
    this.setState({
      videos,
    })
  }

  render(){
    return(
      <div className="yp-videos">
        {this.state.videos ? this._renderYoutubePlaylist() : 'Loading'}
      </div>
    )
  }
}