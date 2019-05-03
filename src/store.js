import { createStore } from 'redux'
import rootReducer from './modules'

const initialState = {}

const store = createStore(
  rootReducer,
  initialState
)

export default store
