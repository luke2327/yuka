import React, { Component } from 'react';
import MessageDirective from './Message-directive';
import './Message.css'

export default class Message extends Component{
  render(){
    return(
      <div className="Message-Component">
        <div className="header-cover">
          <MessageDirective />
        </div>
      </div>
    )
  }
}