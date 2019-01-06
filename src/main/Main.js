import React, { Component } from 'react';
import EndDayCount from '../end-day-count/End-day-count';
import './Main.css';
 
export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="main-body">
          <EndDayCount />
        </div>
      </div>
    );
  }
}