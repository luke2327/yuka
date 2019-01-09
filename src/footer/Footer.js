import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default class Footer extends Component{
  render(){
    return(
      <footer className="footer-main">
        <div className="fm-content-area">
          <div className="fm-auth-list app-flex">
            <a className="fm-widget" href="https://www.sanrio.co.jp/" target="_blank">サンリオ</a>
            <a className="fm-widget" href="https://namu.wiki" target="_blank">ナム　ウィキ</a>
            <Link className="fm-widget" to="/army-letter">手紙を書く</Link>
            {/* <a className="fm-widget" href="https://www.thecamp.or.kr/pcws" target="_blank">手紙を書く</a> */}
          </div>
          <div className="fm-mid-line"></div>
        </div>
      </footer>
    )
  }
}