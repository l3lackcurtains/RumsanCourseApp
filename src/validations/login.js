import validator from 'validator'
import isEmpty from 'lodash/isEmpty'

// Validate input field for course

const validateInput = data => {
	let errors = {}

	if(validator.isEmpty(data.email)) {
		errors.email = 'Email field is empty.'
	}

	if(validator.isEmpty(data.password)) {
		errors.password = 'Password field is empty.'
	}
	
	return {
		errors,
		isValid: isEmpty(errors)
	}
}

export default validateInput