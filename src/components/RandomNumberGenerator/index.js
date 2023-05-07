// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  changeCount = () => {
    const {count} = this.state
    this.setState({
      count: Math.ceil(Math.random(0, 100) * 100),
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <h1 className="title">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.changeCount}>
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
