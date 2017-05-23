import axios from 'axios'
import setAuthorizationToken from '../../utils/setAuthorizationToken'
import jwtDecode from 'jwt-decode'
import A from './index'

// Set current user action
export const setCurrentUser = (data) => ({
	type: A.SET_CURRENT_USER,
	data
})

// Actions for login
const loginUserReq = () => ({
	type: A.REQ_LOGIN
})

const loginUserSuccess = data => ({
	type: A.REC_LOGIN,
	data
})

const loginUserErr = data => ({
	type: A.REC_LOGIN_ERR,
	data
})

// Actions for register
const registerUserReq = () => ({
	type: A.REQ_REGISTER
})

const registerUserSuccess = data => ({
	type: A.REC_REGISTER,
	data
})

const registerUserErr = data => ({
	type: A.REC_REGISTER_ERR,
	data
})

// Logout User
export const logoutUser = () => {
  return dispatch => {
    localStorage.removeItem('jwtToken')
    setAuthorizationToken(false)
    dispatch(setCurrentUser({}))
  }
}

// Login user from server
export const loginUser = data => dispatch => {
	dispatch(loginUserReq())
	const url = '/user/authenticate'
	return axios({
		method: 'post',
		url,
		data
		}).then((res) => {
		if (res.data.success) {
			const token = res.data.token
			localStorage.setItem('jwtToken', token)
			setAuthorizationToken(token)
			dispatch(setCurrentUser(jwtDecode(token)))
			dispatch(loginUserSuccess(res.data.message))
		} else {
			dispatch(loginUserErr(res.data.message))
		}
	}).catch(err =>dispatch(loginUserErr(err)))
}

// Register user to the server
export const registerUser = data => dispatch => {
	dispatch(registerUserReq())
	const url = '/user/register'
	return axios({
		method: 'post',
		url,
		data
	}).then((res) => {
		if (res.data.success) {
			dispatch(registerUserSuccess(res.data.message))
		} else {
			dispatch(registerUserErr(res.data.message))
		}
	}).catch(err =>dispatch(registerUserErr(err)))
}
