import React, { Component } from 'react';
import './End-day-count.css';

export default class EndDayCount extends Component {

  CountDownTimer = (dt, id) =>{
    var end = new Date(dt)

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    const showRemaining = () => {
      var now = new Date();
      var distance = end - now;
      if (distance < 0){
        clearInterval(timer);
        document.getElementById(id).innerHTML = 'EXPIRED!';

        return;
      }
      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);

      days = days < 10 ? `0${days}` : days;
      hours = hours < 10 ? `0${hours}` : hours;
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      
      try{
        document.getElementById(id).innerHTML = days + '日 ';
        document.getElementById(id).innerHTML += hours + '時 ';
        document.getElementById(id).innerHTML += minutes + '分 ';
        document.getElementById(id).innerHTML += seconds + '秒';
      } catch(e) {
        // empty
      }
    }
    timer = setInterval(showRemaining, 1000);
  }

  CurrentTime = (id) => {
    const showCurrentTime = () => {
      try{
        var date = new Date();
        var days = date.getDate();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        days = days < 10 ? `0${days}` : days;
        hours = hours < 10 ? `0${hours}` : hours;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;

        document.getElementById(id).innerHTML = days + '日 ';
        document.getElementById(id).innerHTML += hours + '時 ';
        document.getElementById(id).innerHTML += minutes + '分 ';
        document.getElementById(id).innerHTML += seconds + '秒';

      } catch(e) {
        // empty
      }
    }
    setInterval(showCurrentTime, 1000);
  }

  render() {
    return (
      <div className="edc-Component p-white">
        <div className="eeda">
          <p className="eeda-title eeda-text eeda">源碩の訓練が終わる日</p>
          <p className="eeda-content eeda-text eeda">2019年 2月 7日</p>
        </div>
        <div className="eeda">
          <p className="eeda-title eeda-text eeda">終わるまで残った時間</p>
          <p className="eeda-content eeda-text eeda" id="EDC">{ this.CountDownTimer('02/07/2019', 'EDC') }</p>
        </div>
        <div className="eeda">
          <p className="eeda-title eeda-text eeda">現在時間</p>
          <p className="eeda-content eeda-text eeda" id="CurrentTime">{ this.CurrentTime('CurrentTime')}</p>
        </div>
      </div>
    );
  }
}