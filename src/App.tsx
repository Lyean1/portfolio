import React, { Component } from 'react';
import Navbar from './component/Navbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Hello, welcome to my portfolio.</h1>
      </div>
    );
  }
}