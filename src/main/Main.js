import React, { Component } from 'react';
import EndDayCount from '../end-day-count/End-day-count';
import Temperature from '../temperature/Temperature';
import YoutubePlaylist from '../youtube-playlist/Youtube-playlist';
import './Main.css';
 
export default class Main extends Component {
  render() {
    return (
      <div className="main app-flex">
        <div className="main-body">
          <EndDayCount />
          <Temperature />
          <YoutubePlaylist />
        </div>
        <div className="side-body">
          
        </div>
      </div>
    );
  }
}