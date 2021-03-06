import React, { Component } from 'react';
import './App.css';
import { Board } from './components/Board/Board';
import { BoardGenerator } from './BoardGenerator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Click the Berries!</h1>
        <Board generator={new BoardGenerator()}></Board>
      </div>
    );
  }
}

export default App;