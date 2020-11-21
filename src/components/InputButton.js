import React from "react";

export default class InputButton extends React.Component {
  render() {
    return (
      <a href="/">
        <input
          className="reset-button"
          type="button"
          value={this.props.buttonValue}
        />
      </a>
    );
  }
}
