import validator from 'validator'
import isEmpty from 'lodash/isEmpty'

const validateInput = data => {
	let errors = {};
	if(validator.isEmpty(data.name)) {
		errors.name = 'name field is empty.'
	}
	if(validator.isEmpty(data.description)) {
		errors.description = 'description field is empty.'
	}
	if(validator.isEmpty(data.startDate)) {
		errors.startDate = 'startDate field is empty.'
	}
	if(validator.isEmpty(data.price)) {
		errors.price = 'price field is empty.'
	}
	if(validator.isEmpty(data.instructor)) {
		errors.instructor = 'instructor field is empty.'
	}
	if(validator.isEmpty(data.category)) {
		errors.category = 'category field is empty.'
	}
	if(validator.isEmpty(data.address)) {
		errors.address = 'address field is empty.'
	}
	return {
		errors,
		isValid: isEmpty(errors)
	}
}

export default validateInput