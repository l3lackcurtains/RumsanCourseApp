import A from '../actions'
import isEmpty from 'lodash/isEmpty'

// Initial state
const initState = {
	isLoading: false,
	isReceived: false,
	data: {},
	error: false
}
// Initial state for set user
const initialState = {
  isAuthenticated: false,
  user: {}
}

export const authRe = (state = initialState, action) => {
  switch(action.type) {
	case A.SET_CURRENT_USER:
		return {
		isAuthenticated: !isEmpty(action.data),
		user: action.data
		}
	default:
		return state
  }
}

// reducer for user login
const loginRe = (state = initState, action) => {
	switch (action.type) {
	case A.REQ_LOGIN:
		return {
			...state,
			isLoading: true
		}
	case A.REC_LOGIN:
		return {
			...state,
			isReceived: true,
			isLoading: false,
			data: action.data
		}
	case A.REC_LOGIN_ERR:
		return {
			...state,
			error: true
		}
	default:
		return state
	}
}

// reducer for user register
const registerRe = (state = initState, action) => {
	switch (action.type) {
	case A.REQ_REGISTER:
		return {
			...state,
			isLoading: true
		}
	case A.REC_REGISTER:
		return {
			...state,
			isReceived: true,
			isLoading: false,
			data: action.data
		}
	case A.REC_REGISTER_ERR:
		return {
			...state,
			error: true
		}
	default:
		return state
	}
}

export { loginRe, registerRe }
