import React, { Component } from 'react';
import './Temperature.css';
import init from './Temperature-directive';

export default class Temperature extends Component{
  render(){
    init()
    return(
      <div className="wt-Component p-white">
        <div className="app-flex">
          <div className="app-flex w-first">
            <p className="w-title">溫度</p>
            <p className="w-property w-temperature"></p>
          </div>
          <div className="app-flex">
            <p className="w-title">地域</p>
            <p className="w-property w-locale"></p>
          </div>
        </div>
        <div className="app-flex">
          <div className="app-flex w-first">
            <p className="w-title">風</p>
            <p className="w-property w-wind"></p>
          </div>
          <div className="app-flex">
            <p className="w-title">天気</p>
            <p className="w-property w-weather"></p>
          </div>
        </div>
      </div>
    )
  }
}