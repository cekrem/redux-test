/* eslint-env jest */
import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import App from './App'
import configureStore from './configureStore'

it('renders without crashing', () => {
  const store = configureStore()
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  div)
  ReactDOM.unmountComponentAtNode(div)
})
