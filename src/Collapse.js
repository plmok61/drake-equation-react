import React, { Component } from 'react'
import './assets/App.css'

export default class Collapse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({
      active: !this.state.active
    })
  }

  render () {

    const buttonText = this.state.active ? 'hide' : 'show'
    const sliderClass = this.state.active ? "show" : "hide"

    return (
      <div>
        <div>
          <button onClick={this.toggle}>{buttonText}</button>
        </div>
        <div className={sliderClass}>
          <h1>hi</h1>
        </div>
      </div>
    )
  }
}