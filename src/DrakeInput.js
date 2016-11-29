import React, { Component } from 'react'
import './assets/App.css'

export default class DrakeInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.startValue
    }
    this.changeValue = this.changeValue.bind(this)
  }

  changeValue(id) {
    this.setState({
      value: document.getElementById(id).value
    })
  }

  render () {
    return (
      <div>
        <div>{this.props.descriptionText}{this.state.value}</div>
        <input 
          className='drake-input'
          type='range'
          onChange={(value) => {
            this.props.calculateCivs();
            this.changeValue(this.props.inputId) 
          }}
          id={this.props.inputId}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          value={this.state.value}
        />
      </div>
    )
  }
}
