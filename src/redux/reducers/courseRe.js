import A from '../actions'

const initState = {
	isLoading: false,
	isReceived: false,
	data: {},
	error: false
}

export const getCourseRe = (state = initState, action) => {
	switch (action.type) {
	case A.REQ_COURSE:
		return {
			...state,
			isLoading: true
		}
	case A.REC_COURSE:
		return {
			...state,
			isReceived: true,
			isLoading: false,
			data: action.data
		}
	case A.REC_COURSE_ERR:
		return {
			...state,
			error: true
		}
	default:
		return state
	}
}

export const addNewCourseRe = (state = initState, action) => {
	switch (action.type) {
	case A.REQ_ADD_COURSE:
		return {
			...state,
			isLoading: true
		}
	case A.REC_ADD_COURSE:
		return {
			...state,
			isReceived: true,
			isLoading: false,
			data: action.data
		}
	case A.REC_ADD_COURSE_ERR:
		return {
			...state,
			error: true
		}
	default:
		return state
	}
}
