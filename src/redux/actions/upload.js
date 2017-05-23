import axios from 'axios'
import A from './index'

// Actions for file uploads
const uploadReq = () => ({
	type: A.REQ_UPLOAD
})

const uploadSuccess = data => ({
	type: A.REC_UPLOAD,
	data
})

const uploadErr = data => ({
	type: A.REC_UPLOAD_ERR,
	data
})

/* eslint-disable */
// Upload request to thes server
export const uploadRequest = ({ file, name }) => {
	const data = new FormData()
	data.append('file', file)
	data.append('name', name)
	return (dispatch) => {
		dispatch(uploadReq())
		axios({
			url: '/upload',
			method: 'post',
			data
		}).then(res => dispatch(uploadSuccess(res.data)))
		.catch(err => dispatch(uploadErr(err)))
	}
}
