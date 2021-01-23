import React from 'react';
import ReactDOM from 'react-dom';

export default class About extends React.Component {
  constructor() {
    super();
    this.state = {color: "Blue"};
  }


/* functions go here */



  render() {
    return  (
        <>
        <h2>I am a {this.state.color} About!</h2>
        <h1>Home page</h1>
        <h3>I'm a student</h3>
        <p>I do student</p>
        </>
        );
  }
}


