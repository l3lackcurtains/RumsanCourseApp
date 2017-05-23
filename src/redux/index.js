import { combineReducers, applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { routerReducer } from 'react-router-redux'
import jwtDecode from 'jwt-decode'

import { setCurrentUser } from './actions/userAc'
import setAuthorizationToken from '../utils/setAuthorizationToken'
import rootReducers from './reducers'

// Combine all reducers including the routes
const appReducer = combineReducers({
	...rootReducers,
	routing: routerReducer
})

// Redux Logger Options
const logger = createLogger({
	level: 'info'
})

// Apply thunk and logger middlewares ( remove logger in production mode)
const middleware = applyMiddleware(thunk, logger)

// Create Store for redux
const store = createStore(appReducer, middleware)

/* eslint-disable */
// Dispatch set current user action for authorization
if (localStorage.jwtToken && localStorage.jwtToken !== 'undefined') {
	setAuthorizationToken(localStorage.jwtToken)
	store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
}

export default store
