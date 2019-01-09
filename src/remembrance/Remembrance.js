import React, { Component } from 'react';
import RemembranceDirective from './Remembrance-directive';
import './Remembrance.css';

export default class Remembrance extends Component{
  render(){
    return(
      <div className="Remembrance-Component">
        <div className="rb-cover">
          <RemembranceDirective />
        </div>
      </div>
    )
  }
}