import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    
    var finesse = {
      textAlign: 'center';
    }

    return (
      <div style={finesse}>
        <h1>Hello</h1>
        <h3>My name is {name}</h3>
      </div>
    );
  
  }
}

export default App;
