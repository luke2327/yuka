import React, { Component } from 'react';
import RemembranceTemplate from './Remembrance-template';
import remembranceJson from '../assets/remembrance/remembrance.json';
import './Remembrance.css';

export default class RemembranceDirective extends Component{

  state = {}

  componentDidMount(){
    this._getRemembranceList();
  }

  _renderRemembranceList = () => {
    const remembrances = this.state.remembranceJson.datas.map((remembrance, i) => {
        return <RemembranceTemplate
                key={i}
                content={remembrance.content}
              />
    })

    return remembrances
  }

  _getRemembranceList = () => {
    this.setState({
      remembranceJson,
    })
  }

  render(){
    return(
      <div className="Remembrance-area p-white">
        {this.state.remembranceJson ? this._renderRemembranceList() : 'Loading'}
      </div>
    )
  }
}