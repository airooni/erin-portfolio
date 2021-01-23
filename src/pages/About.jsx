import React from 'react';
import ReactDOM from 'react-dom';

export default class About extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a {this.state.color} About!</h2>;
  }
}


