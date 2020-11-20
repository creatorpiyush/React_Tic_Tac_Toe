import React from "react";

import Board from "./Board";

import Title from "./Title";

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
    console.log(this.state);

    const history = this.state.history;
    const current = history[this.state.stepNumber];

    return (
      <div>
        <Title />
        <Board
          clickAction={(i) => this.handelClick(i)}
          squares={current.squares}
        />
      </div>
    );
  }
}
