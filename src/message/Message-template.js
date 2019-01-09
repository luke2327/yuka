import React, { Component } from 'react';

export default class MessageTemplate extends Component{
  render(){
    return(
      <div id={this.props.month + '-' + this.props.date} className="mt-area">
        <p className="mt-date">{this.props.month + '/' + this.props.date}</p>
        {
          this.props.contents.split('<br>').map((item, i) => {
            return <p className="mt-contents" key={i}>{item}</p>
          })
        }
      </div>
    )
  }
}