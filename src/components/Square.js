import React from "react";

import "../App.css";

export default function Square(props) {
  return (
    <button className="square-button" onClick={props.handleClick}>
      {props.value}
    </button>
  );
}
