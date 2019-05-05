import { createStore, applyMiddleware} from 'redux'
import rootReducer from './modules'
import initialState from './samples/initial-data'
import logger from './middleware/logger'

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(logger)
)

export default store
