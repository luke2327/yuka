import React, { Component } from 'react';
import './Youtube-playlist.css';
import YoutubePlaylistDirective from './Youtube-playlist-directive';

export default class YoutubePlaylist extends Component{
  render(){
    return(
      <div className="yp-Component p-white">
        <p className="yp-title">源碩が好きな歌</p>
        <YoutubePlaylistDirective />
      </div>
    )
  }
}