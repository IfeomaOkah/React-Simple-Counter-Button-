import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

class Counter extends Component {
  state = {
    clickCount: 0,
  };

  clickHandler = () => {
    this.setState({
      clickCount: this.state.clickCount + 1
    });
  };

  reset = () => {
    this.setState({clickCount:0});
  };

  clickMinus = () => {
    this.setState({
      clickCount: this.state.clickCount - 1
    });
  };
    
  render() {
    return (
     <div>
    <h1>{this.state.clickCount}</h1>
    <button onClick={this.clickMinus}>-</button>   
    <button onClick={this.clickHandler}>+</button>
    <button onClick={this.reset}>Reset</button>
    </div>
  );
}
}
export default App;