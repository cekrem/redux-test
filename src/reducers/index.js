import { combineReducers } from 'redux'

const list = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return state.concat(action.element)
    case 'CLEAR':
      return []
    default:
      return state
  }
}

const rootReducer = combineReducers({
  list
})

export default rootReducer
