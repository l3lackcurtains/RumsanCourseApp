import { loginRe, registerRe } from './userRe'
import { getCourseRe, addNewCourseRe } from './courseRe'
import { uploadRe } from './uploadRe'
export default {
	login: loginRe,
	register: registerRe,
	course: getCourseRe,
	addNewCourse: addNewCourseRe,
	upload: uploadRe
}