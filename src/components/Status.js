import React from "react";

export default class Status extends React.Component {
  render() {
    return <div className="status-line">{this.props.status}</div>;
  }
}
