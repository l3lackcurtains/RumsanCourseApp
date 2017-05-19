import A from '../actions'

const initState = {
	isLoading: false,
	isReceived: false,
	data: {},
	error: false
}

export const uploadRe = (state = initState, action) => {
	switch (action.type) {
	case A.REQ_UPLOAD:
		return {
			...state,
			isLoading: true
		}
	case A.REC_UPLOAD:
		return {
			...state,
			isReceived: true,
			isLoading: false,
			data: action.data
		}
	case A.REC_UPLOAD_ERR:
		return {
			...state,
			error: true
		}
	default:
		return state
	}
}