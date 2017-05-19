import axios from 'axios'
import A from './index'

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

export const uploadRequest = ({ file, name }) => {
	let data = new FormData()
	data.append('file', document)
	data.append('name', name)
	return (dispatch) => {
		dispatch(uploadReq())
		axios.post('/upload', data).then(res => {
			console.log(res)
			dispatch(uploadSuccess(res)) 
		})
	}
}