/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Header.css';
import header_logo from '../assets/img/header-logo.png';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render(){
    return(
      <header className="header-main">
        <div className="hm-content-area">
          <Link to="/yuka">
            <img 
              src={header_logo}
              className="hm-logo"
            ></img>
          </Link>
          <div className="hm-nav-content-area">
            <ul className="hm-nav-bar">
              <li className="hm-nav-list">
                <Link to="/letter">
                  <p>メッセージ</p>
                </Link>
              </li>
              <li className="hm-nav-list">
                <Link to="/voice-message">
                  <p>音声メッセージ</p>
                </Link>
              </li>
              <li className="hm-nav-list">
                <Link to="/remembrance">
                  <p>追憶</p>
                </Link>
              </li>
              <li className="hm-nav-list">
                <Link to="/test">
                  <p>テスト</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}