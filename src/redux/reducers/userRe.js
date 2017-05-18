import A from '../actions'

const initState = {
	isLoading: false,
	isReceived: false,
	data: {},
	error: false
}

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
