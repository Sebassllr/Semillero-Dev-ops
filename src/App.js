import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import romanize from './conversor';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value :
        {
          arabian: '',
          roman: ''
        }
    }
  }

  handleChange = (e) =>{ 
    this.setState({value: 
      {
        arabian: e.target.value,
        roman: romanize(e.target.value)
      }
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">HELLO WORLD</h1>
        </header>
        <div>
          <input className="input" type="number" value={this.state.value.arabian} onChange={this.handleChange}/>
          <div className="font margin-top">{this.state.value.roman}</div>
        </div>
      </div>
    );
  }
}

export default App;
