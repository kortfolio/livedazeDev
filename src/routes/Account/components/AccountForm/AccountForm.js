import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Fab } from '@material-ui/core';

import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

export const AccountForm = ({
	account,
	handleSubmit,
	submitting,
	pristine,
	classes,
	avatarUrl,
	defaultUserImageUrl
}) => (
	<form onSubmit={handleSubmit}>
		<List className={classes.root}>
			<ListItem
				alignItems='flex-start'
				style={{
					paddingLeft: '0px',
					paddingRight: '0px'
				}}>
				<ListItemAvatar>
					<Avatar
						alt='Avatar'
						src={avatarUrl || defaultUserImageUrl}
						className={classes.avatarCurrent}
						align='center'
						justify='center'
					/>
				</ListItemAvatar>
				<ListItemText
					primary={
						<Field
							name='displayName'
							label='Name'
							component='input'
							type='text'
							autoComplete='off'
							className={classes.bootstrapInput}
						/>
					}
					secondary={
						<Field
							name='email'
							label='Email'
							component='input'
							type='text'
							autoComplete='off'
							className={classes.bootstrapInput}
						/>
					}
				/>
			</ListItem>
			<Fab
				size='small'
				variant='extended'
				aria-label='Delete'
				className={classes.updateBtn}
				type='submit'
				disabled={pristine || submitting}>
				UPDATE PROFILE
			</Fab>
		</List>
	</form>
);

AccountForm.propTypes = {
	account: PropTypes.object,
	classes: PropTypes.object.isRequired, // from enhancer (withStyles)
	handleSubmit: PropTypes.func.isRequired, // from enhancer (reduxForm)
	pristine: PropTypes.bool.isRequired, // from enhancer (reduxForm)
	submitting: PropTypes.bool.isRequired // from enhancer (reduxForm)
};

export default AccountForm;
