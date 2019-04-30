import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Fab } from '@material-ui/core';
import defaultUserImageUrl from 'static/User.png';
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
	avatarUrl
}) => (
	<form onSubmit={handleSubmit}>
		{console.log(avatarUrl)}
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
						src={avatarUrl != null ? avatarUrl : defaultUserImageUrl}
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
							placeholder='Example Name'
							type='text'
							autoComplete='off'
							className={classes.bootstrapInput}
						/>
					}
					secondary={
						<Field
							name='email'
							label='Email'
							placeholder='live.daze@example.com'
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
