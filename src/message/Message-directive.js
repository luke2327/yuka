import React, { Component } from 'react';
import letterJson from '../assets/letter/letter.json';
import MessageTemplage from './Message-template';
import './Message.css';

export default class MessageDirective extends Component{

  state = {}

  componentDidMount(){
    this._getLetterList();
  }

  _renderLetterList = () => {
    const letters = this.state.letterJson.datas.map((letter, i) => {
      var date = new Date()
      var dt = new Date(`2019, ${letter.month}, ${letter.date}, 00:00:00`)
      if(dt <= date){
        return <MessageTemplage
                key={i}
                contents={letter.contents}
                date={letter.date}
                month={letter.month}
              />
      }
    })

    return letters
  }

  _getLetterList = () => {
    this.setState({
      letterJson,
    })
  }

  render(){
    return(
      <div className="Message-area">
        {this.state.letterJson ? this._renderLetterList() : 'Loading'}
      </div>
    )
  }
}