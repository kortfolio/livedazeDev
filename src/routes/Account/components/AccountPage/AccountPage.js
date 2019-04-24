import React from 'react';
import PropTypes from 'prop-types';
import defaultUserImageUrl from 'static/User.png';
import AccountForm from '../AccountForm';
import { Typography, Grid, Card, Divider } from '@material-ui/core';
import AccountSummary from '../AccountSummary';

export const AccountPage = ({ avatarUrl, updateAccount, profile, classes }) => (
	<div className={classes.root}>
		<Grid container spacing={40} justify='center'>
			<Grid item xs={12} md={4}>
				<Card className={classes.accountSummaryTab}>
					<Typography align='right' className={classes.CardTitleTextDecorator}>
						MY ACCOUNT PROFILE
					</Typography>
					<Divider />
					<Typography
						align='right'
						className={classes.CardTitleTextDecorator}
						style={{ fontSize: '14px', color: '#6b7c93' }}>
						EDIT YOUR PROFILE DETAILS
					</Typography>

					<AccountForm
						onSubmit={updateAccount}
						account={profile}
						initialValues={profile}
						avatarUrl={avatarUrl}
						defaultUserImageUrl={defaultUserImageUrl}
					/>
				</Card>
			</Grid>

			<Grid item xs={12} md={8}>
				<Card className={classes.accountSummaryTabBlack}>
					<AccountSummary />
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
