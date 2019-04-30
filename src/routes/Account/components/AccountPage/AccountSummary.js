import React from 'react';
import Icon from '@mdi/react';
import { mdiCat } from '@mdi/js';
import { mdiFlagCheckered, mdiCogs } from '@mdi/js';
import { Typography, Divider, Grid } from '@material-ui/core';
import RenderLineChart from '../AccountStatistics/AccountStatistics';

const Emoji = (props) => (
	<span
		className='emoji'
		role='img'
		aria-label={props.label ? props.label : ''}
		aria-hidden={props.label ? 'false' : 'true'}>
		{props.symbol}
	</span>
);

export const AccountSummary = ({ account, handleSubmit, submitting, pristine, classes }) => (
	<div>
		<Typography align='right' className={classes.CardTitleTextDecorator}>
			My Statistics
		</Typography>
		<Divider />
		<Typography
			align='right'
			className={classes.CardTitleTextDecorator}
			style={{ fontSize: '14px', color: '#6b7c93' }}
		/>
		<Grid
			container
			justify='center'
			alignContent='center'
			style={{ height: '100%' }}
			spacing={0}>
			<Grid item xs={12}>
				{/* {RenderLineChart} */}
			</Grid>
			<Grid item xs={3}>
				<Icon path={mdiCogs} size={5} color='white' height='100%' />
				{/* <Icon path={mdiFlagCheckered} size={5} color='white' height='100%' /> */}
			</Grid>

			<Grid item xs={9}>
				<h2 style={{ textAlign: 'center', color: 'white', width: '100%' }}>
					Currently under development with Recharts ❤️
				</h2>
			</Grid>
		</Grid>
		{/* There is not enough data to display for your account. */}
	</div>
);

export default AccountSummary;
