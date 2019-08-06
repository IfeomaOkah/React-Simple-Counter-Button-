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
    clickCount: 0
  };

  clickHandler = () => {
    this.setState({
      clickCount: this.state.clickCount + 1
    });
  };

  render() {
    return <button onClick={this.clickHandler}>{this.state.clickCount}</button>;
  }
}
export default App;