import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ToggleButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: true
    }
    this.eventClick = this.eventClick.bind(this)
  }

  eventClick() {
    this.setState(state => ({
      status: !state.status
    }))
  }

  render() {
    return (
      <button
        className='toggle-btn'
        onClick={this.eventClick}
      >
        <span className={this.state.status ? 'default' : 'active'}>Toggle Class</span>
      </button>
    )
  }
}

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: props.start
    }
  }

  componentDidMount() {
    this.addInterval = setInterval(() => this.increase(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.addInterval)
  }

  increase() {
    this.setState((state, props) => ({
      timer: parseInt(state.timer) + 1
    }))
  }

  render() {
    return (
      <div>{this.state.timer}</div>
    )
  }
}

function Age(props) {
  return <span>Age {props.age}</span>
}

function Greeting(props) {
  return <h1>Hello {props.name} - <Age age={props.age} /> </h1>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ToggleButton />
          <Greeting name='Budi' age='30' />
          <Timer start='0' />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    )
  }
}

export default App;
