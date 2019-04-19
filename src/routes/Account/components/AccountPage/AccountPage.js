import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import defaultUserImageUrl from 'static/User.png';
import AccountForm from '../AccountForm';
import Avatar from '@material-ui/core/Avatar';
import { Typography, Grid, Card, Divider } from '@material-ui/core';

export const AccountPage = ({ avatarUrl, updateAccount, profile, classes }) => (
	<div className={classes.root}>
		<Grid container spacing={40} alignContent='center' justify='center'>
			<Grid item xs={12} md={4}>
				<Card className={classes.accountSummaryTab}>
					<Typography className={classes.displayName}>My account</Typography>
					<Divider variant='middle' />
					<Avatar
						alt='Avatar'
						src={avatarUrl || defaultUserImageUrl}
						className={classes.avatarCurrent}
						align='center'
					/>
					<Typography className={classes.displayName}>{profile.displayName}</Typography>
					<Typography className={classes.email}>{profile.email}</Typography>
				</Card>
			</Grid>

			<Grid item xs={12} md={8}>
				<Card className={classes.accountSummaryTab}>
					<div className={classes.settings}>
						<div />
						<div className={classes.meta}>
							<AccountForm
								onSubmit={updateAccount}
								account={profile}
								initialValues={profile}
							/>
						</div>
					</div>
				</Card>
			</Grid>
		</Grid>
	</div>
);

AccountPage.propTypes = {
	classes: PropTypes.object.isRequired, // from enhancer (withStyles)
	avatarUrl: PropTypes.string,
	profile: PropTypes.object,
	updateAccount: PropTypes.func
};

export default AccountPage;
