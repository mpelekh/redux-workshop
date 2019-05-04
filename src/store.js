import { createStore } from 'redux'
import rootReducer from './modules'
import initialState from './samples/initial-data'

const store = createStore(
  rootReducer,
  initialState
)

export default store
