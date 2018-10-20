import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import romanize from './conversor';

class App extends Component {

  state = {
    roman: ''
  }

  handleChange = (e) =>{ 
    this.setState({
      roman: romanize(e.target.value)
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Conversor Arábigo a Romano</h1>
        </header>
        <div>
          <input className="input" type="number" onChange={ this.handleChange }/>
          <div className="font margin-top">{ this.state.roman }</div>
        </div>
      </div>
    );
  }
}

export default App;
