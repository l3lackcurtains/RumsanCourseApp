import axios from 'axios'
import { call, put, takeEvery, all } from 'redux-saga/effects'
import A from '../actions'
import { loginUser, loginUserErr, registerUser, registerUserErr } from '../actions/userAc'

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/' : '/'

// Axios Get data
const getData = link => axios({
	url: link,
	method: 'get',
	responseType: 'json'
})
.then(response => response.data)

// Axios Post data
const postData = (link, formvalues) => axios({
	url: link,
	method: 'post',
	responseType: 'json'
}, formValues)
.then(response => response.data)

export function* fetchLoginUser(action) {
	try {
		const data = yield call(postData, `${ROOT_URL}/authenticate`, action.formValues)
		yield put(loginUser(data))
	} catch (error) {
		yield put(loginUserErr(error.toString()))
	}
}

function* loginUserSaga() {
	yield takeEvery(A.REQ_LOGIN, fetchLoginUser)
}

export default function* rootSagas() {
	yield all([loginUserSaga()])
}
