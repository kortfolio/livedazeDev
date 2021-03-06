/**
 * Returns error message if value does not exist, otherwise returns
 * undefined
 * @param {String} value - Email to validate
 * @example Required Field
 * <Field
 *   name="password"
 *   component={TextField}
 *   label="Password"
 *   type="password"
 *   validate={required}
 * />
 */
export function required(value) {
	return value ? undefined : 'Required';
}

export function goalDateValidate(value, allValues) {
	return value ? undefined : 'Please set your goal day';
}

export function sleepTimeValidate(value, allValues) {
	return value ? undefined : 'Please set your sleep time';
}
/**
 * Returns error message if value is not a valid email, otherwise returns
 * undefined
 * @param {String} value - Email to validate
 * @example Basic
 * <Field
 *   name="email"
 *   component={TextField}
 *   label="Email"
 *   validate={validateEmail}
 * />
 */
export function validateEmail(value) {
	return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		? 'Invalid email address'
		: undefined;
}
