import React, { Component } from 'react';

export default class Counter extends Component {
  render() {
    return (
      <div>
        <div>Number: {this.state.number}</div>
        <button onClick={this.sub}>-</button>
        <button onClick={this.add}>+</button>
      </div>
    );
  }

  state = {
    number: this.props.number
  };

  sub = () => this.setState({ number: this.state.number - 1 });

  add = () => this.setState({ number: this.state.number + 1 });
}
