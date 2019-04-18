import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import UpdatedLoginForm from './UpdatedLoginForm';

const buttonStyle = {
	backgroundColor: '#f7d371',
	color: '#56597a',
	borderRadius: '20px',
	fontFamily: 'isotonic'
};

const LoginForm = ({ pristine, submitting, handleSubmit, classes }) => (
	<form className={classes.root} onSubmit={handleSubmit}>
		<UpdatedLoginForm />
		<div className={classes.submit}>
			<Button
				style={buttonStyle}
				color='secondary'
				type='submit'
				variant='contained'
				disabled={pristine || submitting}>
				{submitting ? 'Loading' : 'Get Started'}
			</Button>
		</div>
	</form>
);

LoginForm.propTypes = {
	classes: PropTypes.object.isRequired, // from enhancer (withStyles)
	pristine: PropTypes.bool.isRequired, // from enhancer (reduxForm)
	submitting: PropTypes.bool.isRequired, // from enhancer (reduxForm)
	handleSubmit: PropTypes.func.isRequired // from enhancer (reduxForm - calls onSubmit)
};

export default LoginForm;
