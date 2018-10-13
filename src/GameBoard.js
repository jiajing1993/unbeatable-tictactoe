import React, { Component } from 'react'
import Box from './Box'
import './App.css';

const possibleWinMove = [
  [1,2,3],
  [3,4,5],
  [6,7,8],
  [1,3,6],
  [2,4,7],
  [3,5,8],
  [1,4,8],
  [3,4,6],
]

const boardLayout = [1,2,3,4,5,6,7,8,9]

export default class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availableMove: boardLayout,
      humanMove: [],
      botMove: []
    };
  };

  alertClick = (x) => {
    let a = this.state.availableMove.filter((i) => i !== x)
    this.setState({
      availableMove: a,
      humanMove: [...this.state.humanMove, x]
    })
    if ()
    let move = a[Math.floor(Math.random()*a.length)]
    console.log(move)
    this.setState({
      botMove: [...this.state.botMove, move],
      availableMove: a.filter((i) => i !== move),
    })
    console.log(this.state.botMove)
  }

  render() {
    return (
      <div className="game-board">
        {
          boardLayout.map((i, index) => {
            return (
              <Box key={index} action={this.alertClick} number={i} availableMove={this.state.availableMove} humanMove={this.state.humanMove} botMove={this.state.botMove}/>
            )
          })
        }
      </div>
    )
  }
}
