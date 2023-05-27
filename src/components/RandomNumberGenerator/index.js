import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  onGenerateRandomNumber = () => {
    const newNumber = Math.ceil(Math.random() * 100)

    this.setState({randomNumber: newNumber})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="container">
        <div className="subContainer">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="btn"
            onClick={this.onGenerateRandomNumber}
          >
            Generate
          </button>
          <p className="para">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
