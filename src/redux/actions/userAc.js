import A from './index'

// Actions for login
export const loginUser = () => ({
	type: A.REQ_LOGIN,
	url
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
export const registerUser = formValue => ({
	type: A.REQ_REGISTER,
	formValue
})

export const registerUserSuccess = data => ({
	type: A.REC_REGISTER,
	data
})

export const registerUserErr = data => ({
	type: A.REC_REGISTER_ERR,
	data
})