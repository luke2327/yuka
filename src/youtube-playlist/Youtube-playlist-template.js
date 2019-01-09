import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Youtube-playlist.css'

export default class YoutubePlaylistTemplate extends Component{
  static propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image_link: PropTypes.string.isRequired,
    date: PropTypes.string
  }
  render(){

    const imageBackground = {
      backgroundImage: 'url(' + this.props.image_link + ')'
    };

    return(
      <div className="ypt-video-area" style={imageBackground}>
        <a href={this.props.link} className="ypt-content-area" target="_blank">
          <p className="ypt-title">{this.props.title}</p>
        </a>
      </div>
    )
  }
}