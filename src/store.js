import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './modules'
import initialState from './samples/initial-data'
import rootSaga from './middleware/sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store
