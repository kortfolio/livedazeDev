import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { required } from 'utils/form';
import { TODOTASK_FORM_NAME } from 'constants/formNames';
class EditTaskTextField extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Field
				name='name'
				component={TextField}
				type='text'
				style={{ width: '100%' }}
				autoComplete='off'
				validate={[ required ]}
			/>
		);
	}
}

// const mapStateToProps = (state, props) => ({
// 	initialValues: state.initialName // retrieve name from redux store
// });

export default reduxForm({
	form: TODOTASK_FORM_NAME,
	enableReinitialize: true,
	onSubmitSuccess: (result, dispatch, props) => props.reset()
})(EditTaskTextField);
