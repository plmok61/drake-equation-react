import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../assets/App.css'
import Result from './Result'
import DrakeInput from './DrakeInput'
import { updateNumCivs } from '../actions/equationActions'

class Equation extends Component {
  constructor(props) {
    super(props);
    this.calculateCivs = this.calculateCivs.bind(this);
  }

  componentDidMount() {
    console.log('props ', this.props)
  }

  calculateCivs() {
    var inputs = Array.from(document.getElementsByTagName('input'));
    var values = inputs.map(function(i) {
      return i.value;
    })
    var result = Math.round(values.reduce(function(result, i) {
      return result * i;
    }))

    this.props.dispatch(updateNumCivs(result))

  }

  render() {
    return (
      <div>
        <div className="inputs-wrap">

          {
            this.props.inputs.map(vals => (
              <DrakeInput 
                inputId={vals.inputId}
                calculateCivs={this.calculateCivs}
                min={vals.min}
                max={vals.max}
                step={vals.step}
                inputValue={vals.startValue}
                descriptionText={vals.descriptionText}
                key={vals.inputId}
              />
            ))
          }
      
        </div>
        <Result numCivs={this.props.numCivs}/>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  inputs: store.equation.inputs,
  numCivs: store.equation.numCivs,
})

export default connect(mapStateToProps)(Equation)
