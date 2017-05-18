import { combineReducers, applyMiddleware, createStore } from 'redux'
import { connect } from 'react-redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { routerReducer } from 'react-router-redux'


import rootReducers from './reducers'
import rootSagas from './sagas'

// Combine all reducers including the routes
const appReducer = combineReducers({
  ...rootReducers,
  routing: routerReducer 
})

// Redux Logger Options
const logger = createLogger({
	level: 'info'
})

// Apply saga, router and logger middlewares
const sagaMiddleware = createSagaMiddleware()
let middleware = applyMiddleware(sagaMiddleware, logger)

// Create Store for redux
const store = createStore(appReducer, middleware)

// Run sagas Middleware
sagaMiddleware.run(rootSagas)

export default store