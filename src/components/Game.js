import React from "react";

import Board from "./Board";

import Title from "./Title";

export default function Game() {
  return (
    <div>
      <Title />
      <div>
        <Board />
      </div>
    </div>
  );
}
