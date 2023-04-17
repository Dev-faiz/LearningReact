import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3", "tag4"],
  };

  render() {
    return (
      <div>
        <span style={this.getStyle()} className={this.getBadgeClass()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-small"
        >
          Increment{" "}
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-small"
        >
          Decrement
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag} </li>
          ))}
        </ul>
      </div>
    );
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    if (this.state.count !== 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  getStyle() {
    return this.state.count === 0
      ? { backgroundColor: "yellow" }
      : { backgroundColor: "blue" };
  }
  getBadgeClass() {
    let badgeClass = "badge m-2 badge-";
    badgeClass += this.state.count === 0 ? "warning" : "primary";
    return badgeClass;
  }
  formatCount() {
    const { count } = this.state;
    return this.state.count === 0 ? "Zero" : count;
  }
}
