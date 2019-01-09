import React, { Component } from 'react';

export default class RemembranceTemplate extends Component{
  render(){
    return(
      <img src={this.props.content} className="rt-image"></img>
    )
  }
}