import React, { Component } from 'react'
import './App.css';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  handleClick = () => {
    if (this.props.availableMove.includes(this.props.number)){
      this.props.action(this.props.number)
    }
  }

  render() {
    let color = "white"
    if (this.props.humanMove.includes(this.props.number)){
      color = "green"
    }else if (this.props.botMove.includes(this.props.number)){
      color = "red"
    }
    return (
      <div className="box" onClick={this.handleClick} style={{backgroundColor: `${color}`}}>
        { this.props.number }
      </div>
    )
  }
}

export default Box;