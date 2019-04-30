import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField } from 'redux-form-material-ui';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { Field } from 'redux-form';

import { required, validateEmail } from 'utils/form';
import { Grid } from '@material-ui/core';

const styles = (theme) => ({
	root: {
		display: 'block',
		width: '100%'
	},
	margin: {
		margin: theme.spacing.unit
	},
	textField: {
		[`& fieldset`]: {
			borderRadius: 40,
			backgroundColor: '#ffffff6b',
			color: 'black'
		}
	}
});

class UpdatedSignupForm extends React.Component {
	state = {
		password: '',
		showPassword: false
	};

	handleChange = (prop) => (event) => {
		this.setState({ [prop]: event.target.value });
	};

	handleClickShowPassword = () => {
		this.setState((state) => ({ showPassword: !state.showPassword }));
	};

	render() {
		const { classes } = this.props;
		//	const { handleSubmit } = this.props;

		return (
			<div className={classes.root}>
				<Grid item xl={6}>
					<Field
						fullWidth={true}
						name='username'
						component={TextField}
						label='username'
						validate={required}
						variant='outlined'
						className={classNames(classes.textField, classes.margin)}
					/>

					<Field
						fullWidth={true}
						name='email'
						component={TextField}
						label='Email'
						validate={[ required, validateEmail ]}
						variant='outlined'
						className={classNames(classes.textField, classes.margin)}
					/>
					<Field
						className={classNames(classes.margin, classes.textField)}
						fullWidth={true}
						name='password'
						component={TextField}
						label='Password'
						type={this.state.showPassword ? 'text' : 'password'}
						variant='outlined'
						validate={required}
						InputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									<IconButton
										aria-label='Toggle password visibility'
										onClick={this.handleClickShowPassword}>
										{this.state.showPassword ? (
											<Visibility />
										) : (
											<VisibilityOff />
										)}
									</IconButton>
								</InputAdornment>
							)
						}}
					/>
				</Grid>
			</div>
		);
	}
}

UpdatedSignupForm.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UpdatedSignupForm);
