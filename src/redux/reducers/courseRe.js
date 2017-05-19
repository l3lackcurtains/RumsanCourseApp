import A from '../actions'

// Initial state
const initState = {
	isLoading: false,
	isReceived: false,
	data: {},
	error: false
}

// Reducer for fetching courses
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

// Reducer for adding new course
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

// Reducer for updaing course
export const updateCourseRe = (state = initState, action) => {
	switch (action.type) {
	case A.REQ_UPDATE_COURSE:
		return {
			...state,
			isLoading: true
		}
	case A.REC_UPDATE_COURSE:
		return {
			...state,
			isReceived: true,
			isLoading: false,
			data: action.data
		}
	case A.REC_UPDATE_COURSE_ERR:
		return {
			...state,
			error: true
		}
	default:
		return state
	}
}

// Reducer for deleting course
export const deleteCourseRe = (state = initState, action) => {
	switch (action.type) {
	case A.REQ_DELETE_COURSE:
		return {
			...state,
			isLoading: true
		}
	case A.REC_DELETE_COURSE:
		return {
			...state,
			isReceived: true,
			isLoading: false,
			data: action.data
		}
	case A.REC_DELETE_COURSE_ERR:
		return {
			...state,
			error: true
		}
	default:
		return state
	}
}
