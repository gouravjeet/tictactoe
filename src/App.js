import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state= {
      PLAYER_ONE_SYMBOL: 'X',
      PLAYER_TWO_SYMBOL: 'O',
      currentTurn: "X",
      board: [
        "", "", "", "", "", "", "", "", ""
      ],
      winner: null
    }
  }

  checkWinner() {
    let winningCombinations = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"]
    ];
    for(let index=0; index< winningCombinations.length; index++) {
      const [a, b, c] = winningCombinations[index];
      if(this.state.board[a] && this.state.board[a] == this.state.board[b] && this.state.board[a] == this.state.board[c]) {
        this.setState({winner: this.state.currentTurn});
      }
    }
  }

  onHandleClick(index) {
    if(this.state.board[index] == "" && !this.state.winner) {
      this.state.board[index] = this.state.currentTurn;
      this.setState({
        board: this.state.board,
        currentTurn: this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL ? this.state.PLAYER_TWO_SYMBOL : this.state.PLAYER_ONE_SYMBOL 
      });
      this.checkWinner();
    }
  }

  render() {
    return (
      <div className="board">
        {this.state.board.map((cell, index) => {
          return <div onClick={this.onHandleClick.bind(this, index)} className="square">{cell}</div>
        })}
        
      </div>
    );
  }
}

export default App;
