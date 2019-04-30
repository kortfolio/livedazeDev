import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { required } from 'utils/form';
import { TODOTASK_FORM_NAME } from 'constants/formNames';
import { withStyles } from '@material-ui/core/styles';

class EditTaskTextField2 extends Component {
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
				InputProps={{
					classes: {
						input: classes.resize
					}
				}}
			/>
		);
	}
}

const styles = (theme) => ({
	resize: {
		fontSize: 12,
		fontFamily: 'isotonic'
	}
});

const EditTaskTextField = withStyles(styles)(EditTaskTextField2);

export default reduxForm({
	form: TODOTASK_FORM_NAME,

	enableReinitialize: true,
	onSubmitSuccess: (result, dispatch, props) => props.reset()
})(EditTaskTextField);
