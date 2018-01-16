import { createStore } from 'redux'
import throttle from 'lodash/throttle'
import rootReducer from './reducers'
import { loadState, saveState } from './localStorage'

const configureStore = () => {
  const persistedState = loadState()
  const store = createStore(rootReducer, persistedState)

  // Persist state to local storage (not more often than every second)
  store.subscribe(throttle(() => {
    saveState(store.getState())
  }, 1000))

  return store
}

export default configureStore
