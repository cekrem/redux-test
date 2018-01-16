import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from './logo.svg'
import './App.css'

class RawApp extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {Object.keys(this.props)}
        </p>
      </div>
    )
  }
}

const App = connect((state) => (
  {
    list: state.list
  }
))(RawApp)

export default App
