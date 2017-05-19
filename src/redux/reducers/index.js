import { loginRe, registerRe, authRe } from './userRe'
import { getCourseRe, addNewCourseRe, updateCourseRe, deleteCourseRe } from './courseRe'
import { uploadRe } from './uploadRe'

export default {
	login: loginRe,
	register: registerRe,
	auth: authRe,
	course: getCourseRe,
	addNewCourse: addNewCourseRe,
	updateCourse: updateCourseRe,
	deleteCourse: deleteCourseRe,
	upload: uploadRe
}