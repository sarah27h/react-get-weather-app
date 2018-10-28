import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Titles />
        <Form />
      </div>
    );
  }
}

export default App;
