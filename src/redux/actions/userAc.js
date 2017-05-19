import axios from 'axios'
import setAuthorizationToken from '../../utils/setAuthorizationToken'
import jwtDecode from 'jwt-decode'
import A from './index'

// Actions for login
export const loginUserReq = () => ({
	type: A.REQ_LOGIN
})

export const loginUserSuccess = data => ({
	type: A.REC_LOGIN,
	data
})

export const loginUserErr = data => ({
	type: A.REC_LOGIN_ERR,
	data
})

// Actions for register
export const registerUserReq = () => ({
	type: A.REQ_REGISTER
})

export const registerUserSuccess = data => ({
	type: A.REC_REGISTER,
	data
})

export const registerUserErr = data => ({
	type: A.REC_REGISTER_ERR,
	data
})

export const logoutUser = () => {
  return dispatch => {
    localStorage.removeItem('jwtToken')
    setAuthorizationToken(false)
    dispatch(setCurrentUser({}))
  }
}

export const loginUser = data => dispatch => {
	dispatch(loginUserReq())
	const url = '/user/authenticate'
	return axios({
		method: 'post',
		url: url,
		data: data
		}).then(res => {
		if(res.data.success) {
			const token = res.data.token
			localStorage.setItem('jwtToken', token)
			setAuthorizationToken(token)
			dispatch(loginUserSuccess(res.data.message))
		} else {
			dispatch(loginUserErr(res.data.message))
		}
	}).catch(err => {
		dispatch(loginUserErr(err))
	})
}

export const registerUser = data => dispatch => {
	dispatch(registerUserReq())
	const url = '/user/register'
	return axios({
		method: 'post',
		url: url,
		data: data
		}).then(res => {
		if(res.data.success) {
			const token = res.data.token
			localStorage.setItem('jwtToken', token)
			setAuthorizationToken(token)
			dispatch(registerUserSuccess(res.data.message))
		} else {
			dispatch(registerUserErr(res.data.message))
		}
	}).catch(err => {
		dispatch(registerUserErr(err))
	})
}

