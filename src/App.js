import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/demo">Demo Page</Link></p>
        {this.props.children}
      </div>
    );
  }
}

export default App;
