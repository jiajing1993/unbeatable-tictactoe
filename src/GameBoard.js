import React, { Component } from 'react'
import Box from './Box'
import './App.css';

const possibleWinMove = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [1,5,9],
  [3,5,7],
]

const boardLayout = [1,2,3,4,5,6,7,8,9]

export default class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availableMove: boardLayout,
      humanMove: [],
      botMove: [],
      status: "",
    };
  };

  alertClick = (x) => {
    // human move
    let a = this.state.availableMove.filter((i) => i !== x)
    this.setState({
      availableMove: a,
      humanMove: [...this.state.humanMove, x]
    }, () => {
        // check human win
        if (!!this.checkWin(this.state.humanMove).length){
          this.setState({
            status: "human win"
          })
        }
        // bot move
        if (a.length !== 0 ){
          let move = this.determineBotMove(this.state.humanMove)
          this.setState({
            botMove: [...this.state.botMove, move],
            availableMove: a.filter((i) => i !== move),
          }, () => {
            if (!!this.checkWin(this.state.botMove).length){
              this.setState({
                status: "bot win"
              })
            }
          })
        }

      }
    )
  }

  checkWin = (move) => {
    let win = [];
    possibleWinMove.forEach((winMove) => {
      let count = 0;
      winMove.forEach((singleMove) => {
        if (move.sort().includes(singleMove)){
          count = count + 1;
        }
      })
      if (count >= 3){
        win.push(winMove)
      }
    })
    return win
  }

  determineBotMove = (move) => {
    if (this.state.availableMove.includes(5)){
      return 5

    } else if (this.state.humanMove.includes(5) && this.state.availableMove.includes(7)){
      return 7
    }else {
      let win = [];
    possibleWinMove.forEach((winMove) => {
      let count = 0;
      winMove.forEach((singleMove) => {
        if (move.sort().includes(singleMove)){
          count = count + 1;
        }
      })
      if (count >= 2){
        console.log(winMove)
        this.arr_diff(winMove, move).forEach((diffMove) => {
          win.push(parseInt(diffMove))
        })
      }
    })

    console.log(this.state.availableMove)
    let possibleMovesss = []
    this.state.availableMove.forEach((move) => {
      if (win.includes(move)){
        possibleMovesss.push(move)
      }
    })
    if (!possibleMovesss.length){
      possibleMovesss.push(this.state.availableMove[Math.floor(Math.random()*this.state.availableMove.length)])
    }
    return possibleMovesss[0]
    }

  }

  arr_diff = (a1, a2) => {

    let a = [], diff = [];

    for (let i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }

    for (let i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
  }

  render() {
    return (
      <div>
      <div className="game-board">

        {
          boardLayout.map((i, index) => {
            return (
              <Box key={index} action={this.alertClick} number={i} availableMove={this.state.availableMove} humanMove={this.state.humanMove} botMove={this.state.botMove}/>
            )
          })
        }
      </div>
      <h1>{this.state.status}</h1>
      </div>
    )
  }
}
