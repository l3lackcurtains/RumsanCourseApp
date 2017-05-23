import axios from 'axios'
import A from './index'

// Actions for fetching courses
const getCourseReq = () => ({
	type: A.REQ_COURSE
})

const getCourseSuccess = data => ({
	type: A.REC_COURSE,
	data
})

const getCourseErr = data => ({
	type: A.REC_COURSE_ERR,
	data
})

// Actions for fetching course by ID
const getCourseByIdReq = () => ({
	type: A.REQ_COURSE_BY_ID
})

const getCourseByIdSuccess = data => ({
	type: A.REC_COURSE_BY_ID,
	data
})

const getCourseByIdErr = data => ({
	type: A.REC_COURSE_BY_ID_ERR,
	data
})

// Actions for adding new course
const addCourseReq = () => ({
	type: A.REQ_ADD_COURSE
})

const addCourseSuccess = data => ({
	type: A.REC_ADD_COURSE,
	data
})

const addCourseErr = data => ({
	type: A.REC_ADD_COURSE_ERR,
	data
})

// Actions for updating course
const updateCourseReq = () => ({
	type: A.REQ_UPDATE_COURSE
})

const updateCourseSuccess = data => ({
	type: A.REC_UPDATE_COURSE,
	data
})

const updateCourseErr = data => ({
	type: A.REC_UPDATE_COURSE_ERR,
	data
})

// Actions for deleting course
const deleteCourseReq = () => ({
	type: A.REQ_DELETE_COURSE
})

const deleteCourseSuccess = data => ({
	type: A.REC_DELETE_COURSE,
	data
})

const deleteCourseErr = data => ({
	type: A.REC_DELETE_COURSE_ERR,
	data
})

// Fetch courses from server
export const fetchCourse = () => (dispatch) => {
	dispatch(getCourseReq())
	const url = '/api/courses'
	return axios({
		url,
		method: 'get',
		responseType: 'json'
	})
	.then((res) => {
		dispatch(getCourseSuccess(res.data))
	})
	.catch(err => dispatch(getCourseErr(err)))		
}

// Fetch course by id from server
export const fetchCourseById = id => (dispatch) => {
	dispatch(getCourseByIdReq())
	const url = `/api/course/${id}`
	return axios({
		url,
		method: 'get',
		responseType: 'json'
	})
	.then((res) => {
		dispatch(getCourseByIdSuccess(res.data))
	})
	.catch(err => dispatch(getCourseByIdErr(err)))		
}

// Add new course to the server
export const addNewCourse = data => (dispatch) => {
	dispatch(addCourseReq())
	const url = '/api/course'
	return axios({
		method: 'post',
		url,
		data
	}).then((res) => {
		if (res.data.success) {
			dispatch(addCourseSuccess(res.data.message))
		} else {
			dispatch(addCourseErr(res.data.message))
		}
	}).catch(err => dispatch(addCourseErr(err)))
}

// Update course in the server
export const updateSelectedCourse = (id, data) => (dispatch) => {
	dispatch(updateCourseReq())
	const url = `/api/course/${id}`
	return axios({
		method: 'put',
		url,
		data
	}).then((res) => {
		if (res.data.success) {
			dispatch(updateCourseSuccess(res.data.message))
		} else {
			dispatch(updateCourseErr(res.data.message))
		}
	}).catch(err => dispatch(updateCourseErr(err)))
}

// Detete course from server
export const deleteSelectedCourse = id => (dispatch) => {
	dispatch(deleteCourseReq())
	const url = `/api/course/${id}`
	return axios({
		method: 'delete',
		url
	}).then((res) => {
		if (res.data.success) {
			dispatch(deleteCourseSuccess(res.data))
		} else {
			dispatch(deleteCourseErr(res.data))
		}
	}).catch(err => dispatch(deleteCourseErr(err)))
}
