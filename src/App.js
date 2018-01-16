import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listAdd, listClear } from './actions'
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
        <button onClick={this.props.listAdd}>
          Add to list
        </button>
        <button onClick={this.props.listClear}>
          Clear list
        </button>
        <p>
          {Object.keys(this.props.list)}
        </p>
      </div>
    )
  }
}

const App = connect(({list}) => (
  {
    list
  }
), (dispatch) => (
  {
    listAdd () {
      dispatch(listAdd())
    },
    listClear () {
      dispatch(listClear())
    }
  }
))(RawApp)

export default App
