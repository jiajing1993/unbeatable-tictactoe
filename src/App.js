import React, { Component } from 'react';
import GameBoard from './GameBoard'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Un Beatable Tic Tac Toe
          </p>
          <GameBoard />
        </header>

      </div>
    );
  }
}

export default App;
