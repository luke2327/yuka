import React, { Component } from 'react';
import login_button from '../assets/img/login_button.png';
import cafe_regi from '../assets/img/cafe_regi.png';
import select_1 from '../assets/img/select_1.png';
import select_2 from '../assets/img/select_2.png';
import final from '../assets/img/final.png';
import './Letter.css';

export default class Letter extends Component{
  render(){
    return(
      <div className="Letter-Component">
        <div className="header-cover">
          <div className="lt-cover">
            <div className="lt-first p-white">
              <p className="lt-title">一番 회원가입</p>
              <img 
                src={login_button}
                className="lt-first-image"
              ></img>
            </div>
            <div className="lt-other p-white">
              <p className="lt-title">二番 육군(논산)훈련소 카페 선택</p>
              <img 
                src={cafe_regi}
                className="lt-first-image"
              ></img>
            </div>
            <div className="lt-other p-white">
              <p className="lt-title">三番 25연대 선택</p>
              <img 
                src={select_1}
                className="lt-first-image"
              ></img>
            </div>
            <div className="lt-other p-white">
              <p className="lt-title">四番 중대는 하나하나 선택해서 맞춰주세요 ㅠㅠㅠ</p>
              <img 
                src={select_2}
                className="lt-first-image"
              ></img>
            </div>
            <div className="lt-other p-white">
              <p className="lt-title">五番 위문편지 쓰기</p>
              <img 
                src={final}
                className="lt-first-image"
              ></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}