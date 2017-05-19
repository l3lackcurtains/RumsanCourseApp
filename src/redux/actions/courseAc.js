import axios from 'axios'
import A from './index'

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

const deleteCourseReq = () => ({
	type: A.REQ_COURSE
})

const deleteCourseSuccess = data => ({
	type: A.REC_COURSE,
	data
})

const deleteCourseErr = data => ({
	type: A.REC_COURSE_ERR,
	data
})

export const fetchCourse = () => dispatch => {
	dispatch(getCourseReq())
	const url = '/api/courses'
	const res = axios({
		url: url,
		timeout: 20000,
		method: 'get',
		responseType: 'json'
	})
	.then( (response) => {
		dispatch(getCourseSuccess(response.data))
	})
	.catch( (response) => {
		dispatch(getCourseErr(response.data))
	} )		
}

export const addNewCourse = data => dispatch => {
	dispatch(addCourseReq())
	const url = '/api/course'
	return axios({
		method: 'post',
		url: url,
		data: data
		}).then(res => {
		if(res.data.success) {
			dispatch(addCourseSuccess(res.data.message))
		} else {
			dispatch(addCourseErr(res.data.message))
		}
	}).catch(err => {
		dispatch(addCourseErr(err))
	})
}
