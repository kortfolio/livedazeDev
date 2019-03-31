import React from 'react';
import PropTypes from 'prop-types';

//MUI
import Tooltip from '@material-ui/core/Tooltip';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

//MDI ICONS
import Icon from '@mdi/react';
import { mdiKeyboardBackspace } from '@mdi/js';
//Livedaze Core Components
import { AfterSetSleepTime } from './SleepTime_BackUp/AfterSetSleepTime';

//CSS Styling
import { withStyles } from '@material-ui/core/styles';
import styles from './SleepTime.styles';

export const DisplaySleepTime = ({ classes, sleepTime, onDelete }) => (
	<React.Fragment>
		<div className={classes.details}>
			<CardContent>
				<Grid item align='right'>
					<Tooltip title='Reset your bed time'>
						<Icon
							path={mdiKeyboardBackspace}
							onClick={onDelete}
							size={0.5}
							color='white'
							cursor='pointer'
						/>
					</Tooltip>
				</Grid>
				<Typography align='right' className={classes.goalDayTitle}>
					My Bedtime
				</Typography>
				{/* Goal Day Picker */}
				<Grid container alignItems='flex-start' justify='flex-end' direction='row'>
					<AfterSetSleepTime sleepTime={sleepTime} />
				</Grid>
			</CardContent>
		</div>
	</React.Fragment>
);

DisplaySleepTime.defaultProps = {
	showDelete: true
};
DisplaySleepTime.propTypes = {
	onDelete: PropTypes.func,
	showDelete: PropTypes.bool
};
export default withStyles(styles, { withTheme: true })(DisplaySleepTime);
