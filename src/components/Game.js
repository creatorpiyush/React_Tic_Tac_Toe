import React from "react";

import Board from "./Board";

import Title from "./Title";

import Status from "./Status";

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      isXnext: true,
      stepNumber: 0,
      history: [{ squares: Array(9).fill(null) }],
    };
  }

  handelClick = (i) => {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares;

    // * Calculate Winner
    const winner = calculateWinner(squares);
    if (winner || squares[i]) {
      return;
    }

    // * SetState
    squares[i] = this.state.isXnext ? "X" : "0";
    this.setState({
      history: history.concat({
        squares: squares,
      }),
      isXnext: !this.state.isXnext,
      stepNumber: history.length,
    });
  };

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    let status;

    const winner = calculateWinner(current.squares);
    if (winner) {
      status = `Winner is ${winner}`;
    } else {
      status = `Player ${this.state.isXnext ? "X" : "0"} Turn`;
    }

    return (
      <div>
        <Title />
        <Status status={status} />
        <Board
          clickAction={(i) => this.handelClick(i)}
          squares={current.squares}
        />
      </div>
    );
  }
}

function calculateWinner(squares) {
  const possibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < possibilities.length; i++) {
    const [a, b, c] = possibilities[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}
